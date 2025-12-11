import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppContainer } from "@/shared/ui-kit";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Мета-теги: noindex + уникальный title */}
      <Helmet>
        <title>Политика конфиденциальности — BBTent</title>
        <meta
          name="description"
          content="Политика обработки персональных данных пользователей сайта BBTent (bbtent.ru)."
        />
        <link rel="canonical" href="https://bbtent.ru/privacy-policy" />
        {/* ⚠️ Рекомендуется: не индексировать служебные страницы */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="flex justify-center pt-28">
        <AppContainer>
          <div className="flex flex-col gap-8 pb-28">
            <div>
              <div className="relative w-full">
                <div className="flex gap-4 items-center w-full">
                  <Button
                    type="button"
                    className="cursor-pointer bg-[#09090973] shrink-0"
                    onClick={() => navigate({ to: "/" })}
                  >
                    <ChevronLeft />
                  </Button>
                  {/* ✅ <h1> — семантический заголовок */}
                  <h1 className="text-[38px] font-[700] truncate min-w-0 flex-1">
                    Политика конфиденциальности
                  </h1>
                </div>
                <div className="bg-[#ffd580] h-[2px] absolute bottom-0 w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-[24px] font-[600] sr-only">
                  Политика конфиденциальности
                </h1>
                {/* ↑ можно оставить только один <h1>, но если нужно — замените на <p> */}

                <p>
                  Настоящая Политика конфиденциальности регулирует порядок
                  обработки и защиты персональных данных пользователей сайта{" "}
                  <b>BBTent</b> (далее — «Сайт»), расположенного по адресу:{" "}
                  <b>https://bbtent.ru</b>.
                </p>

                <p>
                  Используя Сайт и отправляя заявку через формы обратной связи,
                  вы выражаете согласие на обработку ваших персональных данных в
                  соответствии с настоящей Политикой.
                </p>
              </div>

              <Separator />

              {/* Все подзаголовки → <h2> */}
              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  1. Сбор персональных данных
                </h2>
                <p>
                  При заполнении формы заявки на Сайте вы предоставляете
                  следующие персональные данные:
                </p>
                <ul>
                  <li>- Фамилия, имя, отчество (при наличии);</li>
                  <li>- Номер контактного телефона;</li>
                  <li>- Адрес электронной почты.</li>
                </ul>
                <p>
                  Эти данные необходимы для связи с вами, уточнения деталей
                  заявки и предоставления информации об услугах компании.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  2. Цели обработки персональных данных
                </h2>
                <p>
                  Ваши персональные данные обрабатываются исключительно в целях:
                </p>
                <ul>
                  <li>- Связи с вами для обсуждения условий оказания услуг;</li>
                  <li>
                    - Направления коммерческих предложений, актуальной
                    информации об услугах компании <b>BBTent</b>;
                  </li>
                  <li>- Внутреннего учёта и анализа обращений клиентов.</li>
                </ul>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  3. Хранение и обработка данных
                </h2>
                <p>
                  Персональные данные пользователей хранятся в защищённой
                  электронной таблице, к которой имеют доступ только
                  уполномоченные сотрудники компании <b>BBTent</b>.
                </p>
                <p>
                  Мы принимаем все необходимые меры для защиты ваших данных от
                  несанкционированного доступа, утечки, изменения или
                  уничтожения.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  4. Передача данных третьим лицам
                </h2>
                <p>
                  Компания не передаёт ваши персональные данные третьим лицам,
                  за исключением случаев, прямо предусмотренных
                  законодательством Российской Федерации.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  5. Права пользователей
                </h2>
                <p>Вы имеете право:</p>
                <ul>
                  <li>
                    - Получить информацию о том, какие ваши персональные данные
                    обрабатываются;
                  </li>
                  <li>
                    - Отозвать своё согласие на обработку персональных данных в
                    любое время;
                  </li>
                  <li>- Требовать удаления или исправления неточных данных.</li>
                </ul>
                <p>
                  Для реализации этих прав вы можете направить письменный запрос
                  на электронную почту: <b>bb.tent@yandex.ru</b>.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">
                  6. Изменение Политики конфиденциальности
                </h2>
                <p>
                  Администрация сайта оставляет за собой право вносить изменения
                  в настоящую Политику конфиденциальности. Актуальная версия
                  всегда размещается на данной странице.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <h2 className="text-[24px] font-[600]">7. Обратная связь</h2>
                <p>
                  По всем вопросам, связанным с обработкой персональных данных,
                  вы можете обращаться к нам по электронной почте:{" "}
                  <b>bb.tent@yandex.ru</b> или по телефону:{" "}
                  <b>+7 (927) 147-81-65</b>.
                </p>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <p>
                  Дата вступления в силу: <b>9 ноября 2025 г</b>.
                </p>
                <p>
                  Адрес сайта: <b>https://bbtent.ru</b>
                </p>
                <p>
                  Компания: <b>BBTent</b>
                </p>
                <p>
                  Контактные данные: <b>bb.tent@yandex.ru</b>.
                </p>
              </div>
            </div>
          </div>
        </AppContainer>
      </div>
    </>
  );
};
