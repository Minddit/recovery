"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import Charts from "@/components/charts-01";
import { CalendarDateRangePicker } from "@/components/CalendarDateRangePicker";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  // const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="flex gap-6 mt-6 flex-col mx-auto justify-center items-end">
          <div className="flex flex-row gap-5">
            <Button className="dark:bg-black">Download</Button>
            <CalendarDateRangePicker />
          </div>

          <Charts />
        </div>
      </TooltipProvider>
    </ContentLayout>
  );
}
