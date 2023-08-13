'use client'

import MainLayout from '@/components/app-bar'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={'bg-[#282A23]'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainLayout />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}