import { AngariPage } from "@/pages/angari";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/angari")({
  component: AngariPage,
});
