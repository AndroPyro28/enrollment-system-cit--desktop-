"use client";

import {
  Briefcase,
  CalendarDays,
  Home,
  Menu,
  MessageCircle,
  TableProperties,
  Users,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { isUserAllowed } from "@/lib/utils";
import { useSidebarModeStore } from "@/hooks/useSidebarModeStore";
import React, { useState } from "react";

// type routeListType = {
//   roles: ("ALL" | Role)[]
// } & routeType

type routeType = {
  icon: any;
  label: string;
  href: string;
}

export type routeListType = 
  | { id: number; type: 'nested'; roles: ("ALL" | "")[]; icon: any; label: string; hrefs:routeType[]}
  | { id: number; type: 'simple'; roles: ("ALL" | "")[] } & routeType

const routesList: routeListType[] = [
  {
    id: 1,
    icon: Home,
    type:"simple",
    label: "Home",
    href: "/dashboard",
    roles: ["ALL"],
  },
  {
    id: 2,
    icon: TableProperties,
    type:"simple",
    label: "Registration",
    href: "registration",
    roles: ["ALL"],
  },
  {
    id: 3,
    icon: Menu,
    label: "Settings",
    type: "nested",
    hrefs: [
      {
        href: '/students/1',
        icon: Users,
        label: 'Students'
      },
      {
        href: '',
        icon: Users,
        label: 'Add Teacher'
      },
      {
        href: '',
        icon: Users,
        label: 'Add Subject Teacher'
      },
      {
        href: '',
        icon: Users,
        label: 'Add Student'
      },{
        href: '',
        icon: Users,
        label: 'Add School year'
      },{
        href: '',
        icon: Users,
        label: 'Add Section'
      }
    ],
    roles: ["ALL"],
  },
  
];

type SidebarRoutesProps = {
  role: string;
  setOpen?: (open: boolean) => void;
};

export const SidebarRoutes = ({ role, setOpen }: SidebarRoutesProps) => {
  const { mode } = useSidebarModeStore();
  const [routeId, setRouteId] = useState<null | number>()
  return (
    <div className="flex flex-col w-full ">
      {routesList.map((route, index) => {
        if (!isUserAllowed(role, route.roles)) {
          return null;
        }

        return (
          <SidebarItem
            mode={mode}
            key={index}
            // icon={route.icon}
            // label={route.label}
            setOpen={setOpen}
            setRouteId={setRouteId}
            routeId={routeId}
            // href={`/${role}${route.href}`}
            route={route}
          />
        );
      })}
    </div>
  );
};
