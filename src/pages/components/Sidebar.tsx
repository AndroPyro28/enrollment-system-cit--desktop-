"use client";
import { TCurrentUser } from "@/types";
import { Logo } from "./Logo";
import { SidebarRoutes } from "./SidebarRoutes";
import React from "react";

type SidebarProps = {
  currentUser?: TCurrentUser
  setOpen?: (open: boolean) => void;
};
export const Sidebar = ({ currentUser, setOpen }: SidebarProps) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm dark:bg-[#020817] dark:text-white">
      <div className="p-6 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
      
          <SidebarRoutes role={currentUser?.role || ""} setOpen={setOpen} />
      </div>
    </div>
  );
};
