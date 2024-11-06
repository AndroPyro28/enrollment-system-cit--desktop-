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
type SectionSummaryProps = {
  data: any;
};

const SectionSummary = ({ data }: SectionSummaryProps) => {
  return (
    <Table>
      <TableCaption>A list of graduates per year</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Graduates</TableHead>
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
export default SectionSummary;
