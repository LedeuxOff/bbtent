import { AvtotentyPage } from "@/pages/avtotenty";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auto")({
  component: AvtotentyPage,
});
