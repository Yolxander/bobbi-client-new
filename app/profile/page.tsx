"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, MoreVertical, Plus, AtSign, Mic, Send, Home, ListTodo, FileText, MessageSquare, Receipt, User, LogOut, Lock, Bell, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"
import { Navigation } from "@/components/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const orbitron = Orbitron({ subsets: ["latin"] })

interface ProfileSectionProps {
  title: string
  description: string
  color: string
  icon: React.ReactNode
}

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      {/* Left Sidebar */}
      <div className="w-80 flex-shrink-0 border-r border-gray-100 bg-gray-50">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    fill="currentColor"
                  />
                  <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" />
                </svg>
                <span className={orbitron.className}>Bobbi</span>
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Account Settings</h2>
          <div className="space-y-4">
            <ProfileMenuItem
              title="Personal Information"
              description="Update your contact details and preferences"
            />
            <ProfileMenuItem
              title="Security Settings"
              description="Manage passwords and authentication"
            />
            <ProfileMenuItem
              title="Notification Preferences"
              description="Customize how you receive updates"
            />
            <ProfileMenuItem
              title="Billing & Subscription"
              description="View and manage your subscription"
            />
            <ProfileMenuItem
              title="Privacy Settings"
              description="Control your data and privacy"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navigation activePath="/profile" />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Account Overview</h1>
    
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProfileSection
              title="Account Details"
              description="View and update your personal information, contact details, and account preferences."
              color="bg-blue-50"
              icon={<User className="h-6 w-6 text-blue-600" />}
            />
            <ProfileSection
              title="Security"
              description="Manage your password, two-factor authentication, and account security settings."
              color="bg-green-50"
              icon={<Lock className="h-6 w-6 text-green-600" />}
            />
            <ProfileSection
              title="Notifications"
              description="Customize how you receive updates about your projects and account activity."
              color="bg-purple-50"
              icon={<Bell className="h-6 w-6 text-purple-600" />}
            />
            <ProfileSection
              title="Billing"
              description="View your subscription details, payment history, and manage billing information."
              color="bg-orange-50"
              icon={<CreditCard className="h-6 w-6 text-orange-600" />}
            />
          </div>
        </div>

   
      </div>
    </div>
  )
}

function ProfileMenuItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="group cursor-pointer rounded-md p-3 transition-all hover:bg-gray-200">
      <div className="flex items-start justify-between">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <MoreVertical className="h-5 w-5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <p className="mt-1 text-xs text-gray-500 line-clamp-2">{description}</p>
    </div>
  )
}

function ProfileSection({ title, description, color, icon }: ProfileSectionProps) {
  return (
    <div className={`rounded-xl ${color} p-6 shadow-lg transition-all hover:shadow-md`}>
      <div className="mb-4 flex justify-between">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="transform transition-transform hover:scale-105">{icon}</div>
      </div>
      <p className="text-sm font-medium text-gray-700 line-clamp-3">{description}</p>
    </div>
  )
} 