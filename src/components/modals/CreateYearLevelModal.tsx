"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Loader2 } from "../ui/loader";
import { useModal } from "@/hooks/useModalStore";
import { useMutateProcessor } from "@/hooks/useTanstackQuery";
import {
  CreateYearLevelSchema,
  TCreateYearLevelSchema
} from "@/schema/year-level";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";

const CreateYearLevelModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type === "createYearLevel";

  const onHandleClose = () => {
    onClose();
  };

  const form = useForm<TCreateYearLevelSchema>({
    resolver: zodResolver(CreateYearLevelSchema),
    defaultValues: {
      name:""
    },
    mode: "all",
  });

  const createYearlevel = useMutateProcessor<TCreateYearLevelSchema, unknown>({
    url: "/year-level",
    method:"POST",
    key:['year-level'],
  })

  const {toast} = useToast()

  const onSubmit: SubmitHandler<TCreateYearLevelSchema> = async (values) => {
    createYearlevel.mutate(values, {
      onSuccess(data, variables, context) {
        toast({
          variant:"default",
          title:"New year level added"
        })
        form.reset();
        onHandleClose();
      },
    });
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={onHandleClose}>
        <DialogContent className="max-h-[95vh] max-w-[90vw] md:w-[550px] overflow-y-auto dark:bg-[#020817] dark:text-white">
          <DialogHeader className="pt-3 px-6">
            <DialogTitle className="text-2xl text-center font-bold m-2 dark:text-white">
              Add year level
            </DialogTitle>

            <DialogDescription className="text-center text-zinc m-2 font-semibold dark:text-white">
              Add information about this year level
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-5"
            >
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        Year level
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible:ring-0  focus-visible:ring-offset-0"
                          placeholder={`Enter year level`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter className="py-4">
                <Button
                  variant={"default"}
                  type="submit"
                  className=" dark:text-white"
                  disabled={isLoading}
                >
                  {(() => {
                    if (isLoading)
                      return (
                        <div className="flex items-center gap-x-3">
                          {" "}
                          Adding <Loader2 size={20} />
                        </div>
                      );
                    return "Add Year Level";
                  })()}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateYearLevelModal;
