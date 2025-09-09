import React from "react";
import AppSidebar from "@/app/modules/shared/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1 p-4 md:p-6">
        {children}
      </div>
    </div>
  );
}

 