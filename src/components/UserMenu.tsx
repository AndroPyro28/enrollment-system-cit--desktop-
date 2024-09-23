import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Avatar from "./Avatar";
import { ModeToggle } from "./ModeToggle";
import { capitalizeWords } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { SidebarModeSwitch } from "./SidebarModeSwitch";
import React from "react";

type UserMenuProps = {
  currentUser?: {
    image:string;
    id: string;
    name:string
    role:string
  }
};

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const router = useNavigate();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="
          p-[2px]
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          justify-center
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition"
        >
          <div className=" relative w-10 h-10">
            <Avatar src={currentUser?.image as string} />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {capitalizeWords(currentUser?.role!)?.replace("_", " ")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            router(`/${currentUser?.role.toLowerCase()}/profile`)
          }
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ModeToggle />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SidebarModeSwitch />
        </DropdownMenuItem>
        <DropdownMenuItem >Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserMenu;
