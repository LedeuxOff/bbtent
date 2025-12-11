import { KrovlyaPage } from "@/pages/krovlya";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/krovlya")({
  component: KrovlyaPage,
});
