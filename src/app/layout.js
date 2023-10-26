import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Empire technology',
  description: 'Best Web service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar></Navbar>
    
      {children}
      <Footer></Footer></body>
    </html>
  )
}
