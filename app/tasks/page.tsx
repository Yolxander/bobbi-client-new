import Image from "next/image"
import { Search, MoreVertical, Plus, AtSign, Mic, Send, Home, ListTodo, FileText, MessageSquare, Receipt, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"
import { Navigation } from "@/components/navigation"

const orbitron = Orbitron({ subsets: ["latin"] })

interface TaskItemProps {
  title: string
  status: "completed" | "in-progress" | "pending"
  dueDate: string
  assignee: string
  priority: "high" | "medium" | "low"
  color: string
}

interface TaskCardProps {
  title: string
  count: number
  color: string
  icon: React.ReactNode
}

export default function TaskView() {
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
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Task Overview</h2>
          <div className="space-y-4">
            <TaskCard
              title="Completed Tasks"
              count={12}
              color="bg-green-50"
              icon={<CheckCircle2 className="h-6 w-6 text-green-500" />}
            />
            <TaskCard
              title="In Progress"
              count={5}
              color="bg-blue-50"
              icon={<Clock className="h-6 w-6 text-blue-500" />}
            />
            <TaskCard
              title="Pending Review"
              count={3}
              color="bg-yellow-50"
              icon={<AlertCircle className="h-6 w-6 text-yellow-500" />}
            />
            <TaskCard
              title="Overdue"
              count={2}
              color="bg-red-50"
              icon={<AlertCircle className="h-6 w-6 text-red-500" />}
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] max-w-[18rem]">
          <Button className="w-full rounded-full bg-black text-sm font-medium text-white shadow-sm transition-all hover:bg-black/90 hover:shadow-md">
            New Task
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navigation activePath="/tasks" />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">Tasks</h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search tasks"
              className="w-full rounded-md bg-gray-200 py-2 pl-3 pr-10 text-sm font-medium text-gray-700 placeholder-gray-500 outline-none transition-colors focus:bg-gray-100"
            />
            <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TaskItem
              title="Website Redesign"
              status="in-progress"
              dueDate="2024-03-15"
              assignee="Alex G."
              priority="high"
              color="bg-blue-50"
            />
            <TaskItem
              title="Content Strategy"
              status="pending"
              dueDate="2024-03-20"
              assignee="Sarah M."
              priority="medium"
              color="bg-yellow-50"
            />
            <TaskItem
              title="SEO Optimization"
              status="completed"
              dueDate="2024-03-10"
              assignee="Mike R."
              priority="low"
              color="bg-green-50"
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
            Create Task
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Filter Tasks
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Sort by Due Date
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Export Tasks
          </Button>
        </div>

        {/* Chat Input */}
        <div className="bg-white p-4 ">
          <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2  transition-shadow shadow-lg focus-within:shadow-md">
            <input 
              type="text" 
              placeholder="Ask about any task..." 
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

function TaskItem({ title, status, dueDate, assignee, priority, color }: TaskItemProps) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800"
  }

  const priorityColors = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500"
  }

  return (
    <div className={`rounded-xl p-6 shadow-lg transition-all hover:shadow-md ${color}`}>
      <div className="mb-4 flex justify-between">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <MoreVertical className="h-5 w-5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
            {status.replace("-", " ")}
          </span>
          <span className="text-sm text-gray-500">Due: {dueDate}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Assigned to: {assignee}</span>
          <span className={`text-sm font-medium ${priorityColors[priority]}`}>
            {priority} priority
          </span>
        </div>
      </div>
    </div>
  )
}

function TaskCard({ title, count, color, icon }: TaskCardProps) {
  return (
    <div className="group cursor-pointer rounded-md bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{count}</span>
          </div>
        </div>
        {icon}
      </div>
    </div>
  )
} 