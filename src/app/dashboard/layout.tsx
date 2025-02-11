import { Metadata } from "next"
import Image from "next/image"

import { Sidebar } from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Crypto Recovery Dashboard",
  description: "Professional crypto recovery service dashboard",
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
