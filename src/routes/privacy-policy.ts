import { PrivacyPolicyPage } from "@/pages/privacy-policy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});
