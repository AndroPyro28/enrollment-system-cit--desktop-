import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DashboardClient from "./components/DashboardClient";
// import { getDashboardWidget } from "@/queries/dashboard";
import React from "react"
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const DashBoardHomePage = () => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["dashboard-totals"],
  //   queryFn: getDashboardWidget,
  // });
  console.log("hello world")

  let [searchParams, setSearchParams] = useSearchParams();
  let tab = searchParams.get('tab')!
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardClient tab={tab} />
    </HydrationBoundary>
  );
};

export default DashBoardHomePage;