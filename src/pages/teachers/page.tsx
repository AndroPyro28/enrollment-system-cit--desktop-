import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import TeachersClient from "./components/TeachersClient";
import React from "react";
import { Outlet } from "react-router-dom";


type TeachersPageProps = {};
const TeachersPage = (props: TeachersPageProps) => {
  const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["Teachers"],
//     queryFn: ({ queryKey }) => getTeachers({}),
//   });

//   await queryClient.prefetchQuery({
//     queryKey: ["departments"],
//     queryFn: ({ queryKey }) => getDeparments(),
//   });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeachersClient />
    </HydrationBoundary>
  );
};
export default TeachersPage;