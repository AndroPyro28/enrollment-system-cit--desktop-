import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import YearLevelsClient from "./components/YearLevelsClient";


type YearLevelsPageProps = {};
const YearLevelsPage = (props: YearLevelsPageProps) => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <YearLevelsClient />
    </HydrationBoundary>
  );
};
export default YearLevelsPage;