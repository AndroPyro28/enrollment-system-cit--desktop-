import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import TeachersClient from "./components/TeachersClient";
import React from "react";
import { Outlet } from "react-router-dom";
import { queryFn } from "@/hooks/useTanstackQuery";


type TeachersPageProps = {};
const TeachersPage = (props: TeachersPageProps) => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["teachers"],
  //   queryFn: ({ queryKey }) => queryFn({}),
  // });



  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TeachersClient />
    </HydrationBoundary>
  );
};
export default TeachersPage;