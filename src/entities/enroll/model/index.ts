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
import { BRANCHES_DETAIL_DATA } from "@/shared/consts/branches-detail-data";

interface UseEnrollModelProps {
  categoryKey?: string;
}

export const useEnrollModel = ({ categoryKey }: UseEnrollModelProps) => {
  const [fetching, setFetching] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );
  const [slide, setSlide] = useState<SlideType>(
    SLIDES_DATA[categoryKey ? 1 : 0]
  );

  const form = useForm<EnrollFormValues>({
    resolver: zodResolver(enrollFormSchema),
    disabled: fetching,
    values: {
      chooseCategoryForm: {
        categoryKey: categoryKey || "",
      },
      personalDataForm: {
        firstName: "",
        lastName: "",
        middleName: "",
        phone: "",
        email: "",
        comment: "",
        categoryDetail: "",
      },
      date: "",
    },
  });

  const BOT_TOKEN = "7844701764:AAHm-GruIJ6mJSxwIEVFeWORfpx9D4hu4Po";
  const CHAT_ID = "424493509";

  const onSubmit = form.handleSubmit(async (values) => {
    setFetching(true);

    const variables = {
      ...values,
      categoryLabel:
        values.chooseCategoryForm.categoryKey === "any"
          ? "Другое"
          : BRANCHES_DETAIL_DATA[values.chooseCategoryForm.categoryKey].name,
      date: format(new Date(), "dd.MM.yyyy HH:mm"),
    };

    const url =
      "https://script.google.com/macros/s/AKfycbxcR9OZUfEM969wzLW6mKYfMnHedgmxNE30xIitgLf1K4Qq8ayfs0Ot5NMBlR7G4sgh/exec";

    const message = encodeURIComponent(`Новая заявка!`);
    const tgURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`;

    try {
      const response = await fetch(tgURL);
      if (response.ok) {
        console.log("Успешно!");
      }
    } catch (e) {
      console.error("Ошибка:", e);
    }

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //   },
    //   body: `lastName=${encodeURIComponent(variables.personalDataForm.lastName)}&firstName=${encodeURIComponent(variables.personalDataForm.firstName)}&middleName=${encodeURIComponent(variables.personalDataForm.middleName || "")}&email=${encodeURIComponent(variables.personalDataForm.email)}&phone=${encodeURIComponent(variables.personalDataForm.phone)}&categoryLabel=${encodeURIComponent(variables.categoryLabel)}&comment=${encodeURIComponent(variables.personalDataForm.comment || "")}&categoryDetail=${encodeURIComponent(variables.personalDataForm.categoryDetail || "")}`,
    // })
    //   .then((res) => res.text())
    //   .then((data) => alert(data))
    //   .catch((error) => console.log(error));
  });

  const onOpenChange = (value: boolean) => {
    form.reset();
    setStatus(undefined);
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
    status,
    setStatus,
  };
};
