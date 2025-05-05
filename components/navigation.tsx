"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Home, ListTodo, FileText, MessageSquare, Receipt, FileSpreadsheet, User, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItemProps {
  label: string
  description: string
  icon: React.ReactNode
  href: string
  active?: boolean
}

function NavItem({ label, description, icon, href, active = false }: NavItemProps) {
  return (
    <Link href={href} className="group relative">
      <div
        className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
          active 
            ? "bg-black text-white shadow-sm hover:bg-black/90" 
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span>{label}</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute left-1/2 top-full z-50 mt-2 hidden -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 transform rotate-45 bg-gray-900"></div>
        <p className="whitespace-nowrap">{description}</p>
      </div>
    </Link>
  )
}

export function Navigation({ activePath }: { activePath: string }) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-3 shadow-sm">
      <div className="flex items-center gap-6">
        <NavItem 
          label="Dashboard Home" 
          description="See overall progress and key milestones"
          icon={<Home className="h-4 w-4" />}
          href="/"
          active={activePath === "/"}
        />
        <NavItem 
          label="Tasks View" 
          description="Track what's happening now"
          icon={<ListTodo className="h-4 w-4" />}
          href="/tasks"
          active={activePath === "/tasks"}
        />
        <NavItem 
          label="Files Section" 
          description="Review, comment, or approve items"
          icon={<FileText className="h-4 w-4" />}
          href="/files"
          active={activePath === "/files"}
        />
        <NavItem 
          label="Proposals" 
          description="Review and manage proposals"
          icon={<FileSpreadsheet className="h-4 w-4" />}
          href="/proposals"
          active={activePath === "/proposals"}
        />
        <NavItem 
          label="Invoices" 
          description="View/download/pay"
          icon={<Receipt className="h-4 w-4" />}
          href="/invoices"
          active={activePath === "/invoices"}
        />
      </div>
      <div className="ml-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-10 w-10 cursor-pointer overflow-hidden rounded-full border border-gray-200 shadow-sm transition-transform hover:scale-105">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push("/profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Go to Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
} 