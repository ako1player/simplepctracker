import './globals.css'
import type { Metadata } from 'next'
import { AuthContextProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Simple Protein Tracker',
  description: 'Created By Adrian Garcia Rios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthContextProvider>
  )
}
