import { ThemeToggle } from "@/app/modules/shared/shadcn/components/theme-toggle";

export default function DashboardHeader() {
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-4">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}


