import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudentDetailsClient } from "./components/StudentDetailsClient";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

const StudentDetailsPage = () => {
    const { id } = useParams();
    // pre fetch hereimport { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
    const queryClient = new QueryClient();

    useEffect(() => {
        (async () => {
            await queryClient.prefetchQuery({
                queryKey: ["students", id],
                queryFn: ({ queryKey }) => {},
            });
        })();
    }, []);

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="px-5 py-5 rounded-sm h-[750px] overflow-auto">
                <StudentDetailsClient />
            </div>
        </HydrationBoundary>
    );
};

export default StudentDetailsPage;
