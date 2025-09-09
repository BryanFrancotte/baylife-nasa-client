import React from "react";
import AppSidebar from "@/app/modules/shared/components/app-sidebar";
import { AuthGuard } from "@/components/auth/auth-guard";
import DashboardHeader from "./components/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1">
          <DashboardHeader />
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </AuthGuard>
  );
}

 