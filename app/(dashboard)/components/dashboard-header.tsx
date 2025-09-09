"use client";

import { ThemeToggle } from "@/app/modules/shared/shadcn/components/theme-toggle";
import { Button } from "@/app/modules/shared/shadcn/components/ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const logout = useAuthStore((s) => s.logout);
  const router = useRouter();
  const onLogout = () => {
    logout();
    router.push('/login');
  };
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-4">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-end gap-2">
        <ThemeToggle />
        <Button variant="outline" size="sm" onClick={onLogout}>Logout</Button>
      </div>
    </div>
  );
}


