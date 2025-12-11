// scripts/prerender.mjs
import { exec } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const routes = [
  "/",
  "/auto",
  "/basseini",
  "/selhoz-ukritya",
  "/burovie-ukritya",
  "/laguni",
  "/angari",
  "/paviloni",
  "/krovlya",
  "/myagkie-okna",
  "/privacy-policy",
];
const port = 4173;
const baseUrl = `http://localhost:${port}`;
const outDir = join(__dirname, "..", "dist");

// 1. Сборка
console.log("🔧 Собираем проект...");
await new Promise((resolve, reject) => {
  exec("yarn build", (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      reject(error);
    } else {
      console.log("✅ Сборка завершена");
      resolve();
    }
  });
});

// 2. Запуск preview-сервера
console.log("🚀 Запускаем preview-сервер...");
let server;
const serverReady = new Promise((resolve) => {
  server = exec(`yarn preview --port ${port}`, {
    cwd: __dirname,
  });

  // В Windows — часто пишет в stderr
  const onData = (data) => {
    const text = data.toString();
    console.log(`[preview] ${text.trim()}`);
    if (text.includes("http://localhost") || text.includes("Local:")) {
      resolve();
    }
  };

  server.stdout?.on("data", onData);
  server.stderr?.on("data", onData);

  server.on("error", (err) => {
    console.error("[preview] Ошибка:", err);
  });
});

// Ждём максимум 5 секунд
try {
  await Promise.race([serverReady, new Promise((r) => setTimeout(r, 5000))]);
  console.log("✅ Сервер запущен или таймаут ожидания");
} catch (e) {
  console.error("❌ Не удалось запустить preview-сервер");
  process.exit(1);
}

// 3. Ждём ещё немного, чтобы сервер точно стартовал
await new Promise((r) => setTimeout(r, 2000));

// 4. Pre-rendering
console.log("🖨️ Запускаем pre-rendering...");
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

for (const route of routes) {
  const url = baseUrl + route;
  console.log(` → ${url}`);

  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 10000 });

    // Ждём появления контента (h1 или что-то внутри #root)
    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return root && root.innerHTML.trim() !== "";
      },
      { timeout: 8000 }
    );

    const html = await page.content();

    if (route === "/") {
      writeFileSync(join(outDir, "index.html"), html);
      console.log(" 💾 Сохранено: index.html");
    } else {
      const dir = join(outDir, route.slice(1));
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), html);
      console.log(` 💾 Сохранено: ${dir}/index.html`);
    }
  } catch (e) {
    console.warn(` ⚠️ Ошибка для ${route}:`, e.message);
    // Сохраняем даже пустой HTML, чтобы не прерывать цикл
    const fallbackHtml = `<!DOCTYPE html><html><head><title>Fallback</title></head><body><div id="root"></div></body></html>`;
    if (route === "/") {
      writeFileSync(join(outDir, "index.html"), fallbackHtml);
    } else {
      const dir = join(outDir, route.slice(1));
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, "index.html"), fallbackHtml);
    }
  }
}

await browser.close();
server.kill();
console.log("✅ Pre-rendering завершён!");
