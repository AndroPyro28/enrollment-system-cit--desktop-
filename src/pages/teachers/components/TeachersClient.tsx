"use client";

// import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
// import { getTeachers, getTeachersQuery } from "@/queries/Teachers";
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
import { PlusCircle, UserPlus, File } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
import { Loader } from "@/components/ui/loader";
// import { useModal } from "@/hooks/useModalStore";
import { useQueryProcessor } from "@/hooks/useTanstackQuery";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/DataTable";
// import { SafeUserWithProfileWithDapartmentWithSection } from "@/types/types";

type TeachersClientProps = {};
const TeachersClient = (props: TeachersClientProps) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [role, setRole] = useState("ALL");
  const [schoolYear, setSchoolYear] = useState("0");
  const [department, setDepartment] = useState("ALL");
//   const { onOpen } = useModal();

//   const queries: getTeachersQuery = {
//     role,
//     schoolYear,
//     department,
//   };

  // const TeachersQuery = useQuery({
  //   queryKey: ["Teachers", { queries }],
  //   queryFn: () => getTeachers(queries),
  // });

//   const Teachers = useQueryProcessor<
//     SafeUserWithProfileWithDapartmentWithSection[]
//   >(
//     "/Teachers",
//     {
//       role,
//       schoolYear,
//       department,
//     },
//     ["Teachers/alumni"]
//   );

//   useEffect(() => {
//     Teachers.refetch();
//   }, [role, schoolYear, department]);

//   const departmentsQuery = useQuery({
//     queryKey: ["departments"],
//     queryFn: () => getDeparments(),
//   });

//   if (
//     // TeachersQuery.isError ||
//     departmentsQuery.isError ||
//     Teachers.isError
//   ) {
//     return <div>Error...</div>;
//   }

//   if (
//     // TeachersQuery.isPending ||
//     departmentsQuery.isPending ||
//     Teachers.isPending
//   ) {
//     return <Loader />;
//   }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center space-x-2 pb-4">
        <h1 className="text-xl font-bold">Teachers</h1>
        <div className="flex gap-4">
          <div className="flex justify-end gap-x-5">
            {/* <Button
              className="text-zinc-500 dark:text-white"
              variant={"outline"}
            //   onClick={() => onOpen("createStudent")}
            >
              {" "}
              <UserPlus className="w-5 h-5 mr-2" /> Add student
            </Button> */}
            {/* <Button
              className="text-zinc-500 dark:text-white"
              variant={"outline"}
            //   onClick={() => onOpen("importTeachers")}
            >
              {" "}
              <File className="w-5 h-5 mr-2" /> Import Teachers
            </Button> */}

            {/* <Button
              className="text-zinc-500 dark:text-white"
              variant={"outline"}
            //   onClick={() => onOpen("bulkUpdateTeachers")}
            >
              {" "}
              <File className="w-5 h-5 mr-2" /> Update Teachers
            </Button> */}
          </div>
          {/* clear filters */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setRole("ALL");
              setSchoolYear("0");
              setDepartment("ALL");
            }}
          >
            Clear Filters
          </Button>

          {/* <Link href="/dashboard/Teachers/add">
            <Button variant="outline" size="sm">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </Link> */}
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
            <SelectItem value="ALL">All Teachers & Alumni</SelectItem>
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
            email: "Menandroeugenio1028@gmail.com",
            profile: {
                studentNumber:"47912657353554555",
                firstname:"Menandro",
                middlename:"Talla",
                lastname:"Eugenio Jr"
            }
        },
          {
            id: 'd2dcc5gg',
            email: "johndoe@gmail.com",
            profile: {
                studentNumber:"47912657356354555",
                firstname:"john",
                middlename:"venedict",
                lastname:"doe"
            }
        },
        {
          id: 'd3dcc5gg',
          email: "carlbeningto@gmail.com",
          profile: {
              studentNumber:"47912698753554555",
              firstname:"carl",
              middlename:"berria",
              lastname:"beningto"
          }
        }
      ]}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        // searchKeys={["School Year", "Department"]}
      />
    </div>
  );
};
export default TeachersClient;