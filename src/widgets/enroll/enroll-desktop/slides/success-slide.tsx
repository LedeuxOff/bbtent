import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

interface SuccessSlideProps {
  form: UseFormReturn<EnrollFormValues>;
  setSlide: Dispatch<SetStateAction<SlideType>>;
}

export const SuccessSlide = ({ form, setSlide }: SuccessSlideProps) => {
  return <>Success slide</>;
};
