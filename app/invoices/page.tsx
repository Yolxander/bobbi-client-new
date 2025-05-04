import Image from "next/image"
import { Search, MoreVertical, Plus, AtSign, Mic, Send, Home, ListTodo, FileText, MessageSquare, Receipt, Download, Eye, Clock, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Orbitron } from "next/font/google"
import { Navigation } from "@/components/navigation"

const orbitron = Orbitron({ subsets: ["latin"] })

interface InvoiceItemProps {
  invoiceNumber: string
  client: string
  amount: string
  dueDate: string
  status: "accepted" | "pending" | "rejected"
}

interface InvoiceCardProps {
  title: string
  count: number
  color: string
  icon: React.ReactNode
}

export default function InvoiceView() {
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
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Invoice Overview</h2>
          <div className="space-y-4">
            <InvoiceCard
              title="Accepted Invoices"
              count={12}
              color="bg-green-50"
              icon={<CheckCircle2 className="h-6 w-6 text-green-500" />}
            />
            <InvoiceCard
              title="Pending Review"
              count={5}
              color="bg-yellow-50"
              icon={<Clock className="h-6 w-6 text-yellow-500" />}
            />
            <InvoiceCard
              title="Rejected"
              count={2}
              color="bg-red-50"
              icon={<XCircle className="h-6 w-6 text-red-500" />}
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] max-w-[18rem]">
          <Button className="w-full rounded-full bg-black text-sm font-medium text-white shadow-sm transition-all hover:bg-black/90 hover:shadow-md">
            Review Invoices
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <Navigation activePath="/invoices" />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6">
          <h1 className="mb-8 flex items-center justify-center gap-2 text-center text-3xl font-bold text-gray-900">
            <Receipt className="h-8 w-8" />
            Invoices
          </h1>
          
          {/* Invoice Management Toolbar */}
          <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search invoices..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-sm font-medium text-gray-700 placeholder-gray-500 outline-none transition-colors focus:border-gray-300 focus:bg-white"
              />
              <Search className="absolute right-3 top-2 h-4 w-4 text-gray-500" />
            </div>

            {/* Client Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Client:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="all">All Clients</option>
                <option value="client1">Client A</option>
                <option value="client2">Client B</option>
                <option value="client3">Client C</option>
              </select>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="all">All Status</option>
                <option value="accepted">Accepted</option>
                <option value="pending">Pending Review</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select className="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 outline-none transition-colors focus:border-gray-300 focus:bg-white">
                <option value="date">Due Date</option>
                <option value="amount">Amount</option>
                <option value="client">Client</option>
                <option value="status">Status</option>
              </select>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <Eye className="h-4 w-4 mr-1" />
                Review All
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Download className="h-4 w-4 mr-1" />
                Export All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InvoiceItem
              invoiceNumber="INV-2024-001"
              client="Acme Corp"
              amount="$2,500.00"
              dueDate="Monday, 15 March"
              status="accepted"
            />
            <InvoiceItem
              invoiceNumber="INV-2024-002"
              client="Tech Solutions"
              amount="$1,800.00"
              dueDate="Wednesday, 20 March"
              status="pending"
            />
            <InvoiceItem
              invoiceNumber="INV-2024-003"
              client="Global Industries"
              amount="$3,200.00"
              dueDate="Sunday, 10 March"
              status="rejected"
            />
            <InvoiceItem
              invoiceNumber="INV-2024-004"
              client="Creative Agency"
              amount="$1,500.00"
              dueDate="Monday, 25 March"
              status="pending"
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
            Create New
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-sm font-medium shadow-md"
          >
            Filter by Status
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
              placeholder="Ask about any invoice..." 
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

function InvoiceItem({ invoiceNumber, client, amount, dueDate, status }: InvoiceItemProps) {
  const statusColors = {
    accepted: "bg-green-50 text-green-800",
    pending: "bg-yellow-50 text-yellow-800",
    rejected: "bg-red-50 text-red-800"
  }

  const statusBgColors = {
    accepted: "bg-green-50",
    pending: "bg-yellow-50",
    rejected: "bg-red-50"
  }

  return (
    <div className={`rounded-xl p-6 shadow-lg transition-all hover:shadow-md ${statusBgColors[status]}`}>
      <div className="mb-4 flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-gray-500" />
            <h3 className="text-xl font-bold text-gray-900">{invoiceNumber}</h3>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-gray-500">{client}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{amount}</span>
          </div>
        </div>
        <MoreVertical className="h-5 w-5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
            {status}
          </span>
          <span className="text-sm text-gray-500">Due: {dueDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Eye className="h-4 w-4 mr-1" />
            Review
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

function InvoiceCard({ title, count, color, icon }: InvoiceCardProps) {
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