// @ts-ignore
// @ts-nocheck
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
import { Loader2 } from "../ui/loader";
import { useModal } from "@/hooks/useModalStore";
import { useMutateProcessor } from "@/hooks/useTanstackQuery";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "../ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CreateTeacherSchema, TCreateTeacherSchema } from "@/schema/teacher";

const CreateTeacherModal = () => {
    const { isOpen, type, onClose, data } = useModal();
    const isModalOpen = isOpen && type === "createTeacher";

    const onHandleClose = () => {
        onClose();
    };

    const form = useForm<TCreateTeacherSchema>({
        resolver: zodResolver(CreateTeacherSchema),
        defaultValues: {
            extension:"",
            first_name:"",
            last_name:"",
            middle_name:"",
        },
        mode: "all",
    });

    const createTeacher = useMutateProcessor<TCreateTeacherSchema, unknown>({
        url: "/teacher",
        method: "POST",
        key: ["teacher"],
    });

    const { toast } = useToast();

    const onSubmit: SubmitHandler<TCreateTeacherSchema> = async (values) => {
        createTeacher.mutate(values, {
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
                            Add Teacher
                        </DialogTitle>

                        <DialogDescription className="text-zinc m-2 text-center font-semibold dark:text-white">
                            Add information about this teacher
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
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
                                            firstname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder={`Enter firstname`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="middle_name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
                                            middlename
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder={`Enter middlename`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
                                            lastname
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    placeholder={`Enter lastname`}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Gender</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a gender" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="MALE">MALE</SelectItem>
                                                    <SelectItem value="FEMALE">FEMALE</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="w-full">
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ field }) => (
                                        
                                        <FormItem className="w-full">
                                            <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-zinc-400">
                                            Date of birth
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0 "
                                                    type="date"
                                                    placeholder={`Enter date of birth`}
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
                                        return "Add teacher";
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

export default CreateTeacherModal;
