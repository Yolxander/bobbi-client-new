import Image from "next/image"
import { Search, MoreVertical, Plus, AtSign, Mic, Send, Home, ListTodo, FileText, MessageSquare, Receipt, Download, Eye, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"
import { Navigation } from "@/components/navigation"

const orbitron = Orbitron({ subsets: ["latin"] })

interface FileItemProps {
  name: string
  type: string
  size: string
  lastModified: string
  status: "reviewed" | "pending" | "new"
}

interface FileCardProps {
  title: string
  count: number
  color: string
  icon: React.ReactNode
}

export default function FileView() {
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
          <h2 className="mb-4 text-lg font-semibold text-gray-900">File Overview</h2>
          <div className="space-y-4">
            <FileCard
              title="Reviewed Files"
              count={8}
              color="bg-green-50"
              icon={<CheckCircle2 className="h-6 w-6 text-green-500" />}
            />
            <FileCard
              title="Pending Review"
              count={3}
              color="bg-yellow-50"
              icon={<Clock className="h-6 w-6 text-yellow-500" />}
            />
            <FileCard
              title="New Uploads"
              count={2}
              color="bg-blue-50"
              icon={<FileText className="h-6 w-6 text-blue-500" />}
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] max-w-[18rem]">
          <Button className="w-full rounded-full bg-black text-sm font-medium text-white shadow-sm transition-all hover:bg-black/90 hover:shadow-md">
            Upload File
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navigation activePath="/files" />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">Files</h1>
          
          {/* File Management Toolbar */}
          <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search files..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-sm font-medium text-gray-700 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:bg-white"
              />
              <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
            </div>

            {/* File Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="all">All Types</option>
                <option value="pdf">PDF</option>
                <option value="image">Images</option>
                <option value="doc">Documents</option>
                <option value="archive">Archives</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="all">All Status</option>
                <option value="reviewed">Reviewed</option>
                <option value="pending">Pending</option>
                <option value="new">New</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="date">Date Modified</option>
                <option value="name">Name</option>
                <option value="size">Size</option>
                <option value="type">Type</option>
              </select>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <Plus className="h-4 w-4 mr-1" />
                Upload File
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Plus className="h-4 w-4 mr-1" />
                New Folder
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FileItem
              name="Website_Design_R1.pdf"
              type="PDF"
              size="2.4 MB"
              lastModified="2 hours ago"
              status="reviewed"
            />
            <FileItem
              name="Logo_Concepts_V2.ai"
              type="AI"
              size="4.8 MB"
              lastModified="1 day ago"
              status="pending"
            />
            <FileItem
              name="Brand_Guidelines.pdf"
              type="PDF"
              size="1.2 MB"
              lastModified="3 days ago"
              status="reviewed"
            />
            <FileItem
              name="Social_Media_Assets.zip"
              type="ZIP"
              size="8.5 MB"
              lastModified="Just now"
              status="new"
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
            Upload New
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Filter by Type
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Sort by Date
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Export List
          </Button>
        </div>

        {/* Chat Input */}
        <div className="bg-white p-4">
          <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 transition-shadow shadow-lg focus-within:shadow-md">
            <input 
              type="text" 
              placeholder="Ask about any file..." 
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

function FileItem({ name, type, size, lastModified, status }: FileItemProps) {
  const statusColors = {
    reviewed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    new: "bg-blue-100 text-blue-800"
  }

  const statusBgColors = {
    reviewed: "bg-green-100",
    pending: "bg-yellow-100",
    new: "bg-blue-100"
  }

  return (
    <div className={`rounded-xl p-6 shadow-lg transition-all hover:shadow-md ${statusBgColors[status]}`}>
      <div className="mb-4 flex justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-gray-500">{type}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{size}</span>
          </div>
        </div>
        <MoreVertical className="h-5 w-5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
          <span className="text-sm text-gray-500">Modified: {lastModified}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}

function FileCard({ title, count, color, icon }: FileCardProps) {
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