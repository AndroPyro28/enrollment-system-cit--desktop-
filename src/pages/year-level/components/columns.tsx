"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import { Archive, ArrowUpDown, Copy, Eye, MoreHorizontal, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { capitalizeWords, cn } from "@/lib/utils";
import Avatar from "@/components/Avatar";
import { useToast } from "@/components/ui/use-toast";
import React from "react";
import { Link } from "react-router-dom";
export const columns: ColumnDef<any>[] = [
    
    {
        accessorKey: "id",
        header: () => {
            return <div className="sr-only dark:text-white">Id</div>;
        },
        cell: ({ row }) => {
            const id = row.getValue("id") as string;

            return <div className="sr-only dark:text-white">{id}</div>;
        },
    },
    {
        accessorKey: "name",
        header: () => {
            return <div className=" dark:text-white">Year Level</div>;
        },
        cell: ({ row }) => {
            const name = row.getValue("name") as string;

            return <div className=" dark:text-white">{name}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { id, profile } = row.original;

            const onCopy = (id: string) => {
                const { toast } = useToast();

                navigator.clipboard.writeText(id);
                toast({
                    title: "Department ID copied to clipboard.",
                    variant: "default",
                });

                //   toast.success("Department ID copied to clipboard.");
            };

            return (
                <div className="flex justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-4 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() =>
                                    profile.studentNumber &&
                                    onCopy(profile.studentNumber.toString())
                                }
                            >
                                <Copy className="mr-2 h-4 w-4" /> Copy LRN
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => id && onCopy(id)}>
                                <Copy className="mr-2 h-4 w-4" /> Copy ID
                            </DropdownMenuItem>
                            <Link to={`/students/${id}`}>
                                <DropdownMenuItem>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];
