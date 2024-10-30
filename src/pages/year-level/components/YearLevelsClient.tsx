"use client";

// import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
// import { getStudents, getStudentsQuery } from "@/queries/students";
import { columns } from "./columns";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { getDeparments } from "@/queries/department";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus, File, TableOfContents } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
// import { useModal } from "@/hooks/useModalStore";
import { useQueryProcessor } from "@/hooks/useTanstackQuery";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/DataTable";
import { useModal } from "@/hooks/useModalStore";
// import { SafeUserWithProfileWithDapartmentWithSection } from "@/types/types";

type YearLevelsClientProps = {};
const YearLevelsClient = (props: YearLevelsClientProps) => {
  const [globalFilter, setGlobalFilter] = useState("");
  // const [role, setRole] = useState("ALL");
  // const [schoolYear, setSchoolYear] = useState("0");
  // const [department, setDepartment] = useState("ALL");
  const {onOpen} = useModal()
  return (
    <div className="p-6">
      <div className="flex justify-between items-center space-x-2 pb-4">
        <h1 className="text-xl font-bold">Year Level</h1>
        <div className="flex gap-4">
          <div className="flex justify-end gap-x-5">
            <Button
              className="text-zinc-500 dark:text-white"
              variant={"outline"}
              onClick={() => onOpen("createYearLevel")}
            >
              {" "}
              <TableOfContents className="w-5 h-5 mr-2" /> Add year level
            </Button>
           
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // setRole("ALL");
              // setSchoolYear("0");
              // setDepartment("ALL");
            }}
          >
            Clear Filters
          </Button>

       
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:md:sm:grid-cols-4 gap-4 py-4">
        <Input
          placeholder="Search all columns..."
          value={globalFilter ?? ""}
          onChange={(event) => {
            setGlobalFilter(String(event.target.value));
          }}
          className="w-full"
        />
        {/* <Select value={role} onValueChange={(value) => setRole(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Students & Alumni</SelectItem>
            <SelectItem value="STUDENT">Student</SelectItem>
            <SelectItem value="ALUMNI">Alumni</SelectItem>
          </SelectContent>
        </Select> */}

        {/* select school year */}
        
        {/* <Select
          value={schoolYear}
          onValueChange={(value) => setSchoolYear(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="School Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All Years</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
          </SelectContent>
        </Select> */}

        {/* select department */}


        {/* <Select
          value={department}
          onValueChange={(value) => setDepartment(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All Departments</SelectItem>
            {departmentsQuery.data.map((department) => (
              <SelectItem value={department.name} key={department.id}>
                {department.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
      <DataTable
        columns={columns}
        data={[
          {
            id: 'd1dccgg',
            name: "Grade 7",
          },
          {
            id: 'dddaa',
            name: "Grade 8",
          },
      ]}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};
export default YearLevelsClient;