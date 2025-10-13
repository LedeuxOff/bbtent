import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { EnrollFormValues } from "@/entities/enroll/model/types";
import { cn } from "@/lib/utils";
import type { UseFormReturn } from "react-hook-form";
import { PatternFormat } from "react-number-format";

interface FillFieldsSlideProps {
  form: UseFormReturn<EnrollFormValues>;
}

export const FillFieldsSlide = ({ form }: FillFieldsSlideProps) => {
  const categoryKey = form.watch("chooseCategoryForm.categoryKey");

  return (
    <div className="flex flex-col gap-8">
      <span className="text-[24px] md:text-[36px] md:px-0 font-[600] md:font-[800]">
        Заполните данные
      </span>

      <Form {...form}>
        <form className={cn("grid gap-6", `grid-cols-12`)}>
          <FormField
            control={form.control}
            name="personalDataForm.lastName"
            render={(controller) => (
              <FormItem className="col-span-12 md:col-span-4 relative">
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    className={cn(
                      "py-6",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-6" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalDataForm.firstName"
            render={(controller) => (
              <FormItem className="col-span-12 md:col-span-4 relative">
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    className={cn(
                      "py-6",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-6" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalDataForm.middleName"
            render={(controller) => (
              <FormItem className="col-span-12 md:col-span-4 relative">
                <FormLabel>Отчество</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    value={controller.field.value || ""}
                    className={cn(
                      "py-6",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-6" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalDataForm.email"
            render={(controller) => (
              <FormItem className="col-span-12 md:col-span-6 relative">
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    {...controller.field}
                    type="email"
                    className={cn(
                      "py-6",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-6" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personalDataForm.phone"
            render={(controller) => (
              <FormItem className="col-span-12 md:col-span-6 relative">
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <PatternFormat
                    className={cn(
                      "py-6",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                    {...controller.field}
                    inputMode="tel"
                    type="tel"
                    value={(controller.field.value || "")?.replace("+7", "")}
                    customInput={Input}
                    onValueChange={(e) => {
                      if (controller.field.value === `+7${e.value}`) {
                        return null;
                      }

                      form.setValue(controller.field.name, e.formattedValue, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      });
                    }}
                    format="+7 (###) ###-##-##"
                    mask="_"
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-6" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personalDataForm.comment"
            render={(controller) => (
              <FormItem className="col-span-12 relative">
                <FormLabel>Ваш комментарий</FormLabel>
                <FormControl>
                  <Textarea
                    {...controller.field}
                    value={controller.field.value || ""}
                    rows={3}
                    className={cn(
                      "overflow-y-hidden",
                      controller.fieldState.error &&
                        "border-[#ef4444] focus-visible:ring-0"
                    )}
                    onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      const textarea = e.target;
                      textarea.style.height = "auto";
                      textarea.style.height = `${textarea.scrollHeight}px`;
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {categoryKey === "any" && (
            <FormField
              control={form.control}
              name="personalDataForm.categoryDetail"
              render={(controller) => (
                <FormItem className="col-span-12 relative">
                  <FormLabel>Что вы ищете</FormLabel>
                  <FormControl>
                    <Textarea
                      {...controller.field}
                      value={controller.field.value || ""}
                      placeholder="Расскажите подробнее о том что вы ищете"
                      rows={3}
                      className={cn(
                        "overflow-y-hidden",
                        controller.fieldState.error &&
                          "border-[#ef4444] focus-visible:ring-0"
                      )}
                      onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        const textarea = e.target;
                        textarea.style.height = "auto";
                        textarea.style.height = `${textarea.scrollHeight}px`;
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </form>
      </Form>
    </div>
  );
};
