"use client";

import React, { useState } from "react";
import SectionChart from "./SectionChart";
import SectionSummary from "./SectionSummary";
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
    "name": 'Grade 7',
    "section 1": 33,
    "section 2": 55,
    "section 3": 44,
    "section 4": 22,
  },
   {
    "name": 'Grade 8',
    "section 1": 11,
    "section 2": 55,
    "section 3": 77,
    "section 4": 88,
  },
  {
    "name": 'Grade 9',
    "section 1": 43,
    "section 2": 23,
    "section 3": 3,
    "section 4": 61,
  },
   {
    "name": 'Grade 10',
    "section 1": 15,
    "section 2": 6,
    "section 3": 23,
    "section 4": 32,
  },
];

const SectionTab = () => {
  // const [year, setYear] = useState<number>(yearSpan[1].value);

  const dashboardSectionQuery = useQuery({
    queryKey: [
      "dashboard-Section-total",
      {
        // yearSpan: year,
      },
    ],
    queryFn: () => {},
  });

  return (
    <div className="grid">
      <div className="flex flex-col gap-5">
        <div className="shadow-md rounded-md p-5 dark:shadow-none dark:bg-slate-900 dark:text-white text-center">
          <h1 className="text-3xl font-semibold">Total Students Per Section and Year Level</h1>
        </div>
        <div className="h-[550px] shadow-md rounded-md p-4 md:p-8 pb-10 dark:shadow-none dark:bg-slate-900 dark:text-white">
          <h2 className="text-center font-bold text-xl">GRAPH</h2>
          <SectionChart data={dashboardSectionQuery.data || data} />
        </div>
      </div>
      {/* <div className="col-span-5 md:col-span-2 h-full max-h-[660px] shadow-md rounded-md p-4 md:p-8 pb-10 dark:shadow-none dark:bg-slate-900 dark:text-white">
        <h2 className="text-center font-bold text-xl sticky top-0">SUMMARY</h2>
        <div className="overflow-y-auto h-[90%] mt-2">
          <SectionSummary data={dashboardSectionQuery.data || data} />
        </div>
      </div> */}
    </div>
  );
};
export default SectionTab;
