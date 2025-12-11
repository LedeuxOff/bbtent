import { PaviloniPage } from "@/pages/paviloni";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/paviloni")({
  component: PaviloniPage,
});
