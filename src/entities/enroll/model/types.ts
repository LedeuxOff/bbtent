import * as z from "zod";

const phoneValidation = z
  .string()
  .min(17, "Введите полный номер телефона")
  .regex(
    /^\+7 \(9\d{2}\) \d{3}-\d{2}-\d{2}$/,
    "Неверный формат номера телефона"
  );

export const enrollFormSchema = z
  .object({
    categoryKey: z.string(),
    categoryDetail: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    middleName: z.string().optional().nullable(),
    phone: phoneValidation,
    email: z.email(),
    comment: z.string().nullable().optional(),
    date: z.string(),
  })
  .refine(
    (data) =>
      data.categoryKey === "any" ? data.categoryDetail.length > 0 : true,
    {
      message: "Обязательное поле",
      path: ["categoryDetail"],
    }
  );

export type EnrollFormValues = z.infer<typeof enrollFormSchema>;

export type SlideKey =
  | "choose-category"
  | "fill-fields"
  | "check-data"
  | "success"
  | "error";

export type SlideType = {
  key: SlideKey;
  step: number;
  label: string;
};
