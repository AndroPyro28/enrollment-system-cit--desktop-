import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import NavbarWrapper from "@/pages/components/NavbarWrapper";
import { Navbar } from "@/pages/components/Navbar";
import SidebarWrapper from "@/pages/components/SidebarWrapper";
import PageWrapper from "@/pages/components/PageWrapper";
import { Sidebar } from "@/pages/components/Sidebar";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const currentUser = {
        id: "1",
        name: "Andro",
        role: "ADMIN",
        image: "",
    };
    return (
        <>
            <div className="">
                <DragWindowRegion title="Enrollment CIT" />

                {/* <NavbarWrapper>
                    <Navbar currentUser={currentUser} />
                </NavbarWrapper> */}

                <SidebarWrapper>
                    <Sidebar currentUser={currentUser} />
                </SidebarWrapper>
                <PageWrapper>{children}</PageWrapper>
            </div>
        </>
    );
}
