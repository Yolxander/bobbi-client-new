import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bobbi",
  description: "Client Dashboard",
    generator: 'yolxitron'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="flex min-h-screen items-center justify-center bg-gray-100 px-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
