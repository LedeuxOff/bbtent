import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enrollFormSchema,
  type EnrollFormValues,
  type SlideType,
} from "./types";
import { useState } from "react";
import { format } from "date-fns";
import { SLIDES_DATA } from "./consts";

interface UseEnrollModelProps {
  categoryKey?: string;
}

// const url =
//   "https://script.google.com/macros/s/AKfycbxcR9OZUfEM969wzLW6mKYfMnHedgmxNE30xIitgLf1K4Qq8ayfs0Ot5NMBlR7G4sgh/exec";

// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//     body: `FullName=${encodeURIComponent(e.target.fullName.value)}&Email=${encodeURIComponent(e.target.email.value)}&Phone=${encodeURIComponent(e.target.phone.value)}&Service=${encodeURIComponent(e.target.service.value)}&Comment=${encodeURIComponent(e.target.comment.value)}`,
//   })
//     .then((res) => res.text())
//     .then((data) => alert(data))
//     .catch((error) => console.log(error));
// };

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

export const useEnrollModel = ({ categoryKey }: UseEnrollModelProps) => {
  const [fetching, setFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState<SlideType>(
    SLIDES_DATA[categoryKey ? 1 : 0]
  );

  const form = useForm<EnrollFormValues>({
    resolver: zodResolver(enrollFormSchema),
    disabled: fetching,
    values: {
      categoryKey: categoryKey || "",
      categoryDetail: "",
      firstName: "",
      lastName: "",
      middleName: "",
      phone: "",
      email: "",
      comment: "",
      date: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    setFetching(true);

    const variables = {
      ...values,
      date: format(new Date(), "dd.MM.yyyy HH:mm"),
    };

    console.log(variables);

    setTimeout(() => {
      setFetching(false);
    }, 1000);
  });

  const onOpenChange = (value: boolean) => {
    form.reset();
    setSlide(SLIDES_DATA[0]);
    setOpen(value);
  };

  return {
    form,
    onSubmit,
    fetching,
    slide,
    setSlide,
    onOpenChange,
    open,
  };
};
