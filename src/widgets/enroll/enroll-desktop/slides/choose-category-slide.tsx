import type {
  EnrollFormValues,
  SlideType,
} from "@/entities/enroll/model/types";
import type { Dispatch, SetStateAction } from "react";
import type { UseFormReturn } from "react-hook-form";

interface ChooseCategorySlideProps {
  form: UseFormReturn<EnrollFormValues>;
  setSlide: Dispatch<SetStateAction<SlideType>>;
}

export const ChooseCategorySlide = ({
  form,
  setSlide,
}: ChooseCategorySlideProps) => {
  return <>Choose category slide</>;
};
