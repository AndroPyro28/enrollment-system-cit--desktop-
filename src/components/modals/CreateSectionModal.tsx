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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Loader, Loader2 } from "../ui/loader";
import { useModal } from "@/hooks/useModalStore";
import { useMutateProcessor, useQueryProcessor } from "@/hooks/useTanstackQuery";
import { CreateSectionSchema, TCreateSectionSchema } from "@/schema/section";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { TYearLevelSchemaWithSection } from "@/schema/year-level";

const CreateSectionModal = () => {
    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "createSection";

    const onHandleClose = () => {
        onClose();
    };

    const form = useForm<TCreateSectionSchema>({
        resolver: zodResolver(CreateSectionSchema),
        defaultValues: {
            name: "",
            yearLevelId: "",
        },
        mode: "all",
    });

    const CreateSection = useMutateProcessor<TCreateSectionSchema, unknown>({
        url: "/sections",
        method: "POST",
        key: ["sections"],
    });

    const { toast } = useToast();

    const yearLevels = useQueryProcessor<TYearLevelSchemaWithSection[]>({
        url:'/year-level',
        key:['year-level'],
        options: {
            enabled: isModalOpen
        }
      })

      const yearLevelIds = yearLevels.data?.map((yl) => ({id:yl.id, name: yl.name}))


    const onSubmit: SubmitHandler<TCreateSectionSchema> = async (values) => {
        CreateSection.mutate(values, {
            onSuccess(data, variables, context) {
                toast({
                    variant: "default",
                    title: "New section added",
                });
                form.reset();
                onHandleClose();
            },
        });
    };

    const isLoading = form.formState.isSubmitting;

    return (
        <div>
            <Dialog open={isModalOpen} onOpenChange={onHandleClose}>
                <DialogContent className="max-h-[95vh] max-w-[90vw] overflow-y-auto dark:bg-[#020817] dark:text-white md:w-[550px]">
                    <DialogHeader className="px-6 pt-3">
                        <DialogTitle className="m-2 text-center text-2xl font-bold dark:text-white">
                            Add section
                        </DialogTitle>

                        <DialogDescription className="text-zinc m-2 text-center font-semibold dark:text-white">
                            Add information about this section
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
                                            <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
                                                Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder={`Enter section name`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {
                                yearLevels.isPending ? <Loader /> : <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="yearLevelId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Assign to</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a year level" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        yearLevelIds?.map((yl) => <SelectItem value={yl.id}>{yl.name}</SelectItem> )
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            }
                            <DialogFooter className="py-4">
                                <Button
                                    variant={"default"}
                                    type="submit"
                                    className="dark:text-white"
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

export default CreateSectionModal;
