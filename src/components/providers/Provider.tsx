"use client";
import React from "react";
import QueryProvider from "./QueryProvider";
import ToastProvider from "./ToastProvider";
import ModalProvider from "./ModalProvider";
import { ThemeProvider } from "next-themes";
import { SocketIoProvider } from "./SocketProvider";
import BaseLayout from "./BaseLayout";
import DragWindowRegion from "../DragWindowRegion";

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ToastProvider />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        storageKey="enrollment-system"
        >
        {/* <SocketIoProvider> */}
          <QueryProvider>
              <ModalProvider />
            <BaseLayout>
              {children}
            </BaseLayout>
          </QueryProvider>
        {/* </SocketIoProvider> */}
      </ThemeProvider>
    </>
  );
};

export default Provider;
