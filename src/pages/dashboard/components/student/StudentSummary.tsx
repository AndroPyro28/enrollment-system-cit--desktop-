import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
type StudentSummaryProps = {
  data: any;
};

const StudentSummary = ({ data }: StudentSummaryProps) => {
  return (
    <Table>
      <TableCaption>A list of student per year level</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Year Level</TableHead>
          <TableHead>Number of students</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice:any) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.name}</TableCell>
            <TableCell className="text-left">{invoice.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default StudentSummary;
