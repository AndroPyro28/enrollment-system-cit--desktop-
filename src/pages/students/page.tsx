import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import StudentsClient from "./components/StudentsClient";
import React from "react";


type StudentsPageProps = {};
const StudentsPage = (props: StudentsPageProps) => {
  const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["students"],
//     queryFn: ({ queryKey }) => getStudents({}),
//   });

//   await queryClient.prefetchQuery({
//     queryKey: ["departments"],
//     queryFn: ({ queryKey }) => getDeparments(),
//   });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StudentsClient />
    </HydrationBoundary>
  );
};
export default StudentsPage;