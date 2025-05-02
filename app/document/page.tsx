import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronUp, Minus, Plus, MousePointer, Hand } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItemProps {
  label: string
  active?: boolean
}

interface DocumentSectionProps {
  number: string
  title: string
  image: string
}

export default function DocumentReviewPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
      {/* Left Sidebar - Document Navigation */}
      <div className="w-80 flex-shrink-0 border-r border-gray-100 bg-gray-50">
        <div className="p-6">
          <Link href="#" className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Rental agreements</span>
          </Link>

          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Creating physical rent contract for a flat in Georgia.
          </h2>

          <div className="mt-8 space-y-6">
            <DocumentSection
              number="1"
              title="Residential Lease Parties and Setup"
              image="/placeholder.svg?height=150&width=150"
            />
            <DocumentSection 
              number="2" 
              title="Agreement Overview" 
              image="/placeholder.svg?height=150&width=150" 
            />
            <DocumentSection
              number="3"
              title="Tenant and Landlord Obligations"
              image="/placeholder.svg?height=150&width=150"
            />
            <DocumentSection
              number="4"
              title="Default and Miscellaneous Provisions"
              image="/placeholder.svg?height=150&width=150"
            />
          </div>
        </div>
      </div>

      {/* Main Content - Document View */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <div className="flex items-center justify-end border-b border-gray-100 px-6 py-3">
          <div className="flex items-center gap-8">
            <NavItem label="Conversations" />
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

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 text-right text-sm text-gray-500">page 1</div>

          <h1 className="mb-6 text-2xl font-bold">Responsibilities.</h1>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Maintenance and Repairs:</h2>
            <p className="mb-4 text-gray-700">
              The Landlord shall be responsible for maintaining the Property in a habitable condition, including repairs
              to structural elements and systems. The Tenant shall be responsible for routine maintenance and minor
              repairs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Utilities and Services:</h2>
            <p className="mb-4 text-gray-700">
              The Tenant shall be responsible for payment of all utilities and services, including but not limited to
              electricity, water, gas, and internet, unless otherwise specified in writing by the Landlord.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Use of Property:</h2>
            <p className="mb-4 text-gray-700">
              The Tenant shall use the Property solely for residential purposes and shall not engage in any unlawful
              activities on the premises.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Tenant Rights and Responsibilities:</h2>
            <p className="mb-4 text-gray-700">
              The Tenant shall have the right to quiet enjoyment of the Property and shall comply with all rules and
              regulations governing the use of the premises.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Landlord Access:</h2>
            <p className="mb-4 text-gray-700">
              The Landlord shall have the right to enter the Property at reasonable times for purposes of inspection,
              maintenance, or repairs, upon providing reasonable notice to the Tenant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Termination and Renewal:</h2>
            <p className="mb-4 text-gray-700">
              Either party may terminate this Lease upon [Notice Period] written notice to the other party. At the
              expiration of the initial term, this Lease may be renewed by mutual agreement of the parties.
            </p>
          </section>

          <div className="mb-4 mt-8 text-right text-sm text-gray-500">page 2</div>

          <section className="mb-8">
            <h2 className="mb-3 font-semibold">Governing Law:</h2>
          </section>

          <section className="mb-8">
            <ol className="list-decimal pl-6">
              <li className="mb-2">
                <span className="font-medium">Severability:</span> If any provision of this Lease is held to be invalid
                or unenforceable, the remaining provisions shall remain in full force and effect.
              </li>
            </ol>
          </section>
        </div>

        {/* Document Controls */}
        <div className="fixed bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-gray-100 px-4 py-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center text-sm font-medium">60%</span>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Plus className="h-4 w-4" />
          </Button>
          <div className="mx-2 h-6 border-l border-gray-300"></div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MousePointer className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Hand className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Sidebar - Analysis */}
      <div className="w-96 flex-shrink-0 border-l border-gray-100 bg-gray-50">
        <div className="h-full overflow-y-auto p-6">
          <h2 className="mb-4 text-xl font-bold">LegalBot</h2>

          <p className="mb-6 text-gray-700">
            It seems to be a rental contract between Mariam Dadiani, and Ivan Zhukov about 6 month of renting apartments
            in Tbilisi. We have found some paragraphs that we can adjust. You can ask additional questions to find or
            address some specific features of the document.
          </p>

          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Controversial paragraphs: 3</h3>
              <ChevronUp className="h-5 w-5 text-gray-500" />
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium">Paragraph 6, page 2 (Pets):</h4>
                <p className="text-sm text-gray-700">
                  The clause regarding pets may be controversial as it restricts tenants from having any pets without
                  prior written consent from the landlord.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium">Paragraph 11, page 2 (Maintenance and Repairs):</h4>
                <p className="text-sm text-gray-700">
                  The section outlining tenant responsibilities for maintenance and repairs could lead to disputes as it
                  appears to place an extensive burden on the tenant.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium">Paragraph 15, page 3 (Early Termination):</h4>
                <p className="text-sm text-gray-700">
                  The terms for early termination seem one-sided, heavily favoring the landlord's rights and potentially
                  infringing upon the tenant's rights.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Grammar errors: 5</h3>
              <ChevronUp className="h-5 w-5 text-gray-500" />
            </div>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg bg-red-50 p-4">
                <h4 className="mb-2 font-medium">Paragraph 3 (Payment of Rent):</h4>
                <p className="text-sm text-gray-700">"Lessee's" should be corrected to "Tenant's."</p>
                <div className="mt-2 text-right">
                  <Button className="bg-red-100 text-red-800 hover:bg-red-200">Resolve</Button>
                </div>
              </div>

              <div className="rounded-lg bg-red-50 p-4">
                <h4 className="mb-2 font-medium">Paragraph 9 (Subletting and Assignment):</h4>
                <p className="text-sm text-gray-700">
                  "If any of the Tenant's shall" should be amended to "If any of the Tenants shall."
                </p>
                <div className="mt-2 text-right">
                  <Button className="bg-red-100 text-red-800 hover:bg-red-200">Resolve</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({ label, active = false }: NavItemProps) {
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

function DocumentSection({ number, title, image }: DocumentSectionProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
        {number}
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <div className="mt-2 overflow-hidden rounded-md border border-gray-200">
          <Image src={image || "/placeholder.svg"} width={150} height={150} alt={title} className="h-auto w-full" />
        </div>
      </div>
    </div>
  )
}
