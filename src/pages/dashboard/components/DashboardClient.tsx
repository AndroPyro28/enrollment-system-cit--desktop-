// @ts-ignore
// @ts-nocheck
"use client";
import React, { useState } from "react";
import Widget from "./Widget";
import {
  LucideUserSquare2,
  LayoutDashboard,
  ListChecks,
  GraduationCap,
} from "lucide-react";
import StudentTab from "./student/StudentTab";
import JobTab from "./jobs/JobTab";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useQuery } from "@tanstack/react-query";
// import { getDashboardWidget } from "@/queries/dashboard";
import {useNavigate, useSearchParams} from "react-router-dom"
import qs from "query-string";
import { useLocation, useParams } from "react-router-dom";
import SectionTab from "./section/SectionTab";

type DashboardClientProps = {
  tab: string;
};

const DashboardClient = ({ tab = "students" }: DashboardClientProps) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const pathname = useLocation().pathname;

  const dashboardTotalsQuery = useQuery({
    queryKey: ["dashboard-totals"],
    queryFn: () => {},
  });

  const redirectTo = useNavigate()


  const handleSelectedTab = (tab: string) => {
    const newUrl = qs.stringifyUrl({
      url: "/",
      query: {
        tab
      }
    }, {
      skipNull:true,
      skipEmptyString:true
    })
    redirectTo(newUrl)
  };


  return (
    <div className="p-6">
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div onClick={() => handleSelectedTab("students")}>
            <Widget
              title="STUDENTS"
              total={dashboardTotalsQuery.data?.students || 0}
              icon={LucideUserSquare2}
            />
          </div>
          <div onClick={() => handleSelectedTab("alumni")}>
            <Widget
              title="ALUMNI"
              total={dashboardTotalsQuery.data?.alumni || 0}
              icon={GraduationCap}
            />
          </div>
          <div onClick={() => handleSelectedTab("jobs")}>
            <Widget
              title="JOBS"
              total={dashboardTotalsQuery.data?.student_alumni_with_jobs || 0}
              icon={LayoutDashboard}
            />
          </div>
          <div>
            <AlertDialog>
              <AlertDialogTrigger className="w-full text-left">
                <Widget
                  title="UPCOMING EVENTS"
                  total={dashboardTotalsQuery.data?.upcomming_events || 0}
                  icon={ListChecks}
                />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will navigate you to events page.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => redirectTo("/events")}>
                    Continue anyway
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div> */}

      <div className="flex flex-col mt-5">
        {/* {(() => {
          if (tab === "alumni") return <AlumniTab />;
          if (tab === "students") return <StudentTab />;
          if (tab === "jobs") return <JobTab />;
          if (tab === "event") redirectTo("/events");
        })()} */}
        <StudentTab />
        <SectionTab />
      </div>
    </div>
  );
};

export default DashboardClient;
