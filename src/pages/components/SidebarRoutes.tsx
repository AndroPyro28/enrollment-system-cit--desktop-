"use client";

import {
  Briefcase,
  CalendarDays,
  ChartArea,
  Home,
  LayoutDashboard,
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
    icon: ChartArea,
    type:"simple",
    label: "Dashboard",
    href: "/",
    roles: ["ALL"],
  },
  {
    id: 2,
    icon: TableProperties,
    type:"simple",
    label: "Registration",
    href: "/registration",
    roles: ["ALL"],
  },
  {
    id: 3,
    icon: Menu,
    label: "Settings",
    type: "nested",
    hrefs: [
      {
        href: '/students',
        icon: Users,
        label: 'Students'
      },
      {
        href: '/teachers',
        icon: Users,
        label: 'Teachers'
      },
      {
        href: '/year-level',
        icon: TableProperties,
        label: 'Year Level'
      },
      {
        href: '/section',
        icon: TableProperties,
        label: 'Section'
      },
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
