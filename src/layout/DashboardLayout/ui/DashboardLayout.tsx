import { SidebarProvider } from "@/shared/ui/sidebar";
import type { HTMLAttributes } from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="flex flex-col gap-6 w-full">
        <DashboardHeader />
        <div className="px-4 lg:px-6 flex flex-col gap-4 lg:gap-6 pb-10">{children}</div>
      </div>
    </SidebarProvider>
  );
};
