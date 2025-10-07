import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

interface ErrorSlideProps {
  form: UseFormReturn<EnrollFormValues>;
  setSlide: Dispatch<SetStateAction<SlideType>>;
}

export const ErrorSlide = ({ form, setSlide }: ErrorSlideProps) => {
  return <>Error slide</>;
};
