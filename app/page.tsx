import Image from "next/image"
import { Search, MoreVertical, Plus, AtSign, Mic, Send, Home, ListTodo, FileText, MessageSquare, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"
import { Navigation } from "@/components/navigation"

const orbitron = Orbitron({ subsets: ["latin"] })

interface NavItemProps {
  label: string
  description: string
  icon: React.ReactNode
  active?: boolean
  href: string
}

interface ConversationItemProps {
  title: string
  description: string
}

interface FeatureCardProps {
  title: string
  description: string
  color: string
  icon: React.ReactNode
}

export default function LegalBotUI() {
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
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Projects</h2>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search projects"
              className="w-full rounded-md bg-gray-200 py-2 pl-3 pr-10 text-sm font-medium text-gray-700 placeholder-gray-500 outline-none transition-colors focus:bg-gray-100"
            />
            <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
          </div>

          <div className="space-y-4">
            <ConversationItem
              title="Website Redesign Project"
              description="Sprint 2 in progress. Design team reviewing new mockups. Frontend implementation: 60% complete."
            />
            <ConversationItem
              title="Mobile App Development"
              description="API integration phase. Backend team setting up authentication. QA testing initial features."
            />
            <ConversationItem
              title="E-commerce Platform"
              description="Payment gateway implementation. Security audit in progress. User testing scheduled next week."
            />
            <ConversationItem
              title="CRM Integration"
              description="Data migration ongoing. Custom field mapping. Training materials being prepared."
            />
            <ConversationItem
              title="Marketing Dashboard"
              description="Analytics implementation. Real-time data visualization. Client review meeting tomorrow."
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] max-w-[18rem]">
          <Button className="w-full rounded-full bg-black text-sm font-medium text-white shadow-sm transition-all hover:bg-black/90 hover:shadow-md">
            New project
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navigation activePath="/" />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">Project Progress Overview</h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureCard
              title="Current Progress"
              description="3 projects in progress, 2 completed this month. Overall completion rate: 85%. Next milestone: Contract Review due in 2 days."
              color="bg-blue-50"
              icon={<ProjectProgressIcon />}
            />
            <FeatureCard
              title="Timeline Status"
              description="All projects on schedule. Upcoming deadline: Patent Application Review (Dec 15). Recent milestone: Trademark Registration completed."
              color="bg-orange-50"
              icon={<TimelineIcon />}
            />
            <FeatureCard
              title="Budget Overview"
              description="Total budget utilized: 65%. Cost savings achieved: 12%. Next payment milestone: $2,500 due upon trademark approval."
              color="bg-green-50"
              icon={<BudgetIcon />}
            />
            <FeatureCard
              title="Team Collaboration"
              description="5 active freelancers. Recent updates from: Patent Attorney (2h ago), Legal Researcher (5h ago). 3 pending reviews."
              color="bg-purple-50"
              icon={<TeamIcon />}
            />
          </div>
        </div>

        {/* Option Pills */}
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Check Project Status
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Review Deliverables
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Leave Feedback
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Ask a Question
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            End-of-Project Feedback
          </Button>
        </div>

        {/* Chat Input */}
        <div className=" bg-white p-4 ">
          <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-lg transition-shadow focus-within:shadow-md">
            <input 
              type="text" 
              placeholder="Ask LegalBot anything ..." 
              className="flex-1 bg-transparent text-sm font-medium text-gray-700 placeholder-gray-500 outline-none" 
            />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Plus className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <AtSign className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Mic className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
            <Button className="ml-2 rounded-full bg-black p-2 shadow-sm transition-all hover:bg-black/90 hover:shadow-md" size="icon">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ label, description, icon, active = false, href }: NavItemProps) {
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

function ConversationItem({ title, description }: ConversationItemProps) {
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

function FeatureCard({ title, description, color, icon }: FeatureCardProps) {
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

function ProjectProgressIcon() {
  return (
    <div className="relative h-16 w-16">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="#E3F2FD" />
        <path d="M30 40L36 46L50 32" stroke="#2196F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function TimelineIcon() {
  return (
    <div className="relative h-16 w-16">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="#FFF3E0" />
        <rect x="30" y="25" width="20" height="30" rx="2" fill="#FF9800" fillOpacity="0.2" />
        <rect x="35" y="30" width="10" height="2" rx="1" fill="#FF9800" />
        <rect x="35" y="35" width="10" height="2" rx="1" fill="#FF9800" />
        <rect x="35" y="40" width="10" height="2" rx="1" fill="#FF9800" />
      </svg>
    </div>
  )
}

function BudgetIcon() {
  return (
    <div className="relative h-16 w-16">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="#E8F5E9" />
        <path d="M40 25V55M35 30H45M35 50H45" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function TeamIcon() {
  return (
    <div className="relative h-16 w-16">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="#F3E5F5" />
        <circle cx="40" cy="35" r="8" fill="#9C27B0" fillOpacity="0.2" />
        <path d="M30 50C30 44.4772 34.4772 40 40 40C45.5228 40 50 44.4772 50 50" stroke="#9C27B0" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  )
}
