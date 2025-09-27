import {
  MainPageAboutSection,
  MainPageBranchesSection,
  MainPageFeedbackSection,
  MainPageVideoSection,
  MainPageWelcomeSection,
} from "@/pages/main";
import { MainPageFAQSection } from "@/pages/main/faq-section";
import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const url =
    "https://script.google.com/macros/s/AKfycbxcR9OZUfEM969wzLW6mKYfMnHedgmxNE30xIitgLf1K4Qq8ayfs0Ot5NMBlR7G4sgh/exec";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: `FullName=${encodeURIComponent(e.target.fullName.value)}&Email=${encodeURIComponent(e.target.email.value)}&Phone=${encodeURIComponent(e.target.phone.value)}&Service=${encodeURIComponent(e.target.service.value)}&Comment=${encodeURIComponent(e.target.comment.value)}`,
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col gap-8 pt-28">
      <MainPageWelcomeSection />
      <MainPageAboutSection />
      <MainPageBranchesSection />
      <MainPageFeedbackSection />
      <MainPageFAQSection />
      <MainPageVideoSection />
    </div>
  );

  // return (
  //   <div className="p-2">
  //     <h3>Welcome Home!</h3>

  //     <div>
  //       <form onSubmit={handleSubmit} className="flex flex-col gap-2">
  //         <input name="fullName" placeholder="FullName" />
  //         <input name="email" placeholder="Email" />
  //         <input name="phone" placeholder="Phone" />
  //         <input name="service" placeholder="Service" />
  //         <input name="comment" placeholder="Comment" />
  //         <button>Add</button>
  //       </form>
  //     </div>
  //   </div>
  // );
}
