import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Plus, AtSign, Mic, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConversationPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
      {/* Left Sidebar - Conversations */}
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
                <span>
                  Legal<span className="font-bold">Bot</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-4">
          <Link
            href="#"
            className="mb-6 flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">All conversations</span>
          </Link>

          <h2 className="mb-4 text-xl font-bold text-gray-800">Rental agreements</h2>

          <div className="space-y-6">
            <ConversationListItem
              title="Rental agreement, Creating"
              description="Physical rent contract for Georgia. Document creation step 1/5."
              active={true}
            />
            <ConversationListItem
              title="Rental contract, Politkovskaya 23"
              description="Uploaded document. Checkup. 5 pages. 3 contradictory paragraphs, 4 grammar errors."
            />
          </div>
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)] max-w-[18rem]">
          <Button className="w-full rounded-full bg-black text-white hover:bg-black/90">New conversation</Button>
        </div>
      </div>

      {/* Main Content - Conversation */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <div className="flex items-center justify-end border-b border-gray-100 px-6 py-3">
          <div className="flex items-center gap-8">
            <NavItem label="Conversations" active />
            <NavItem label="My documents" />
            <NavItem label="Legal library" />
            <NavItem label="Live consultants" />
          </div>
          <div className="ml-6">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Conversation Thread */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-8">
            {/* Bot Welcome Message */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
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
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-semibold">LegalBot</h3>
                <p className="text-gray-700">
                  Looks like you are going to work with rental agreements in this channel. Your channel has been renamed
                  to <span className="font-semibold">Rental Agreements</span>, and you'll find all the documents you
                  create or upload in the fast <span className="font-semibold">navigation menu at the sidebar</span> for
                  easy access. Later you can adjust the name and description if you want. If you have any further
                  questions or need assistance, feel free to ask!
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-4">
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Mariam Dadiani"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-semibold">Mariam Dadiani (you)</h3>
                <p className="text-gray-700">I have made some changes to the document, can you please check it?</p>
              </div>
            </div>

            {/* Document Attachment */}
            <div className="ml-14">
              <div className="mb-4 flex items-start gap-3 rounded-lg border border-gray-200 p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-red-100 text-red-600">
                  <span className="text-xs font-bold">PDF</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Rental agreement. Politkovskaya.pdf</h4>
                  <p className="text-sm text-gray-500">8 pages</p>
                </div>
              </div>

              {/* Document Previews */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h5 className="mb-2 text-sm font-medium">Responsibilities.</h5>
                  <div className="text-xs text-gray-600">
                    <p className="mb-1 font-medium">Maintenance and Repairs:</p>
                    <p className="line-clamp-3">
                      The Landlord shall be responsible for maintaining the Property in a habitable condition, including
                      repairs to structural elements and systems. The Tenant shall be responsible for routine
                      maintenance and minor repairs.
                    </p>
                    <p className="mt-1 font-medium">Utilities and Services:</p>
                    <p className="line-clamp-2">
                      The Tenant shall be responsible for payment of all utilities and services, including
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h5 className="mb-2 text-sm font-medium">Use of Property:</h5>
                  <div className="text-xs text-gray-600">
                    <p className="line-clamp-3">
                      The Tenant shall use the Property solely for residential purposes and shall not engage in any
                      unlawful activities on the premises.
                    </p>
                    <p className="mt-1 font-medium">Tenant Rights and Responsibilities:</p>
                    <p className="line-clamp-3">
                      The Tenant shall have the right to quiet enjoyment of the Property and shall comply with all rules
                      and regulations governing the use of the premises.
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <h5 className="mb-2 text-sm font-medium">Tenant obligatory</h5>
                  <div className="text-xs text-gray-600">
                    <p className="mb-1 font-medium">Parties</p>
                    <p className="line-clamp-3">
                      This Residential Lease Agreement ("Lease") is entered into between [Landlord Name] ("Landlord")
                      and [Tenant Name] ("Tenant"). The Landlord agrees to rent to the Tenant, and the Tenant agrees to
                      rent from the Landlord, the premises located at [Property Address].
                    </p>
                    <p className="mt-1 font-medium">Landlord Access:</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bot Analysis */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
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
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-semibold">LegalBot: Looks like a Rental Contract</h3>
                <p className="mb-4 text-gray-700">
                  It seems to be a rental contract between Mariam Dadiani, and Ivan Zhukov about 6 month of renting
                  appartments in Tbilisi. We have found some paragraphs that we can adjust.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                  >
                    3 Controversial paragraphs
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800"
                  >
                    5 Grammar errors
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full bg-yellow-50 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800"
                  >
                    1 Additional highlight
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center rounded-full border border-gray-200 bg-white px-4 py-2">
            <input type="text" placeholder="Ask LegalBot anything ..." className="flex-1 bg-transparent outline-none" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Plus className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <AtSign className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mic className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
            <Button className="ml-2 rounded-full bg-black p-2" size="icon">
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ label, active = false }) {
  return (
    <div
      className={`cursor-pointer px-3 py-2 text-sm font-medium ${
        active ? "rounded-full bg-black text-white" : "text-gray-700"
      }`}
    >
      {label}
    </div>
  )
}

function ConversationListItem({ title, description, active = false }) {
  return (
    <div className={`cursor-pointer rounded-md p-3 ${active ? "bg-gray-200 hover:bg-gray-300" : "hover:bg-gray-200"}`}>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  )
}
