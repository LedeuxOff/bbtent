import { BasseiniPage } from "@/pages/basseini";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/basseini")({
  component: BasseiniPage,
});
