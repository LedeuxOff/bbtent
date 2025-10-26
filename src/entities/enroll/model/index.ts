import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enrollFormSchema,
  type EnrollFormValues,
  type SlideType,
} from "./types";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { format } from "date-fns";
import { SLIDES_DATA } from "./consts";
import { BRANCHES_DETAIL_DATA } from "@/shared/consts/branches-detail-data";
import { toast } from "sonner";

interface UseEnrollModelProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categoryKey?: string;
}

export const useEnrollModel = ({
  open,
  setOpen,
  categoryKey,
}: UseEnrollModelProps) => {
  const [fetching, setFetching] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | undefined>(
    undefined
  );
  const [slide, setSlide] = useState<SlideType>(
    SLIDES_DATA[categoryKey ? 1 : 0]
  );

  useEffect(() => {
    if (categoryKey) {
      setSlide(SLIDES_DATA[1]);
    }
  }, [categoryKey]);

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

  // const BOT_TOKEN = "7844701764:AAHm-GruIJ6mJSxwIEVFeWORfpx9D4hu4Po";
  // const CHAT_ID = "424493509";

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
      "https://script.google.com/macros/s/AKfycbxewIHaPjg0s4iCvZBpMNOL2ilHGYr5FqMjMLSYr5GoA3P7yD3MfSj3KiNTM6nq48gQyA/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: `lastName=${encodeURIComponent(variables.personalDataForm.lastName)}&firstName=${encodeURIComponent(variables.personalDataForm.firstName)}&middleName=${encodeURIComponent(variables.personalDataForm.middleName || "")}&email=${encodeURIComponent(variables.personalDataForm.email)}&phone=${encodeURIComponent(variables.personalDataForm.phone)}&categoryLabel=${encodeURIComponent(variables.categoryLabel)}&comment=${encodeURIComponent(variables.personalDataForm.comment || "")}&categoryDetail=${encodeURIComponent(variables.personalDataForm.categoryDetail || "")}`,
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((error) => console.log(error));
  });

  const onOpenChange = (value: boolean) => {
    form.reset();
    setStatus(undefined);
    setSlide(SLIDES_DATA[0]);
    setOpen(value);
  };

  const handleNextSlide = () => {
    if (slide.key === "choose-category") {
      form.trigger("chooseCategoryForm").then((validateResult) => {
        console.log(form.formState.errors);
        if (validateResult) {
          setSlide(SLIDES_DATA[1]);
        } else {
          toast.error("Выберите услугу");
        }
      });
    }

    if (slide.key === "fill-fields") {
      form.trigger("personalDataForm").then((validateResult) => {
        if (validateResult) {
          setSlide(SLIDES_DATA[2]);
        } else {
          toast.error("Проверьте правильность заполнения полей");
        }
      });
    }
  };

  const handlePrevSlide = () => {
    setSlide(SLIDES_DATA[slide.step - 2]);
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
    handleNextSlide,
    handlePrevSlide,
  };
};
