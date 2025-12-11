import { LaguniPage } from "@/pages/laguni";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/laguni")({
  component: LaguniPage,
});
