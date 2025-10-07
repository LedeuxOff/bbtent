import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

interface FillFieldsSlideProps {
  form: UseFormReturn<EnrollFormValues>;
  setSlide: Dispatch<SetStateAction<SlideType>>;
}

export const FillFieldsSlide = ({ form, setSlide }: FillFieldsSlideProps) => {
  return <>Fill fields slide</>;
};
