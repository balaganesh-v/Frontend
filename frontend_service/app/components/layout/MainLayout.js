"use client"
import Providers from '@/providers/Providers'
import Navbar from './Navbar'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}
