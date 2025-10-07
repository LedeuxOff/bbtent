import { BranchDetailPage } from "@/pages/branch-detail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$id")({
  component: BranchDetailPage,
});
