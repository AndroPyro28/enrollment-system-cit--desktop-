import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";
import SectionClient from "./components/SectionClient";


type SectionPageProps = {};
const SectionPage = (props: SectionPageProps) => {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SectionClient />
    </HydrationBoundary>
  );
};
export default SectionPage;