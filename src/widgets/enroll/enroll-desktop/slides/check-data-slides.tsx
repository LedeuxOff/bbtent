import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

interface CheckDataSlideProps {
  form: UseFormReturn<EnrollFormValues>;
  setSlide: Dispatch<SetStateAction<SlideType>>;
}

export const CheckDataSlide = ({ form, setSlide }: CheckDataSlideProps) => {
  return <>Check data slide</>;
};
