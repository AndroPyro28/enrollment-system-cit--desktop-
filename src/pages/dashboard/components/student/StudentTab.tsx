"use client";

import React, { useState } from "react";
import StudentChart from "./StudentChart";
import StudentSummary from "./StudentSummary";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

const data = [
  {
    name: 'Grade 7',
    value: 155,
  },
  {
    name: 'Grade 8',
    value: 222,
  },
  {
    name: 'Grade 9',
    value: 333,
  },
  {
    name: 'Grade 10',
    value: 444,
  },
];

const StudentTab = () => {
  // const [year, setYear] = useState<number>(yearSpan[1].value);

  const dashboardStudentQuery = useQuery({
    queryKey: [
      "dashboard-Student-total",
      {
        // yearSpan: year,
      },
    ],
    queryFn: () => {},
  });

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-5 md:col-span-3 flex flex-col gap-5">
        <div className="shadow-md rounded-md p-5 dark:shadow-none dark:bg-slate-900 dark:text-white text-center">
          <h1 className="text-3xl font-semibold">Total Students Enrolled</h1>
          {/* <div className="flex flex-wrap items-center gap-5 md:gap-10 h-full">
            <Select
              onValueChange={(e) => setYear(parseInt(e))}
              defaultValue={year.toString()}
            >
              <SelectTrigger className="w-[300px] h-[50px]">
                <SelectValue placeholder="Select Years" />
              </SelectTrigger>
              <SelectContent>
                {yearSpan.map((year) => (
                  <SelectItem value={year.value.toString()} key={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </div>
        <div className="h-[550px] shadow-md rounded-md p-4 md:p-8 pb-10 dark:shadow-none dark:bg-slate-900 dark:text-white">
          <h2 className="text-center font-bold text-xl">GRAPH</h2>
          <StudentChart data={dashboardStudentQuery.data || data} />
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 h-full max-h-[660px] shadow-md rounded-md p-4 md:p-8 pb-10 dark:shadow-none dark:bg-slate-900 dark:text-white">
        <h2 className="text-center font-bold text-xl sticky top-0">SUMMARY</h2>
        <div className="overflow-y-auto h-[90%] mt-2">
          <StudentSummary data={dashboardStudentQuery.data || data} />
        </div>
      </div>
    </div>
  );
};
export default StudentTab;
