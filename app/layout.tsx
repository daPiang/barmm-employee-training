import './ui/global.css'
import { Metadata } from 'next'
import { poppins } from 'ui/fonts'
import {NextUIProvider} from "@nextui-org/react";
 
export const metadata: Metadata = {
  title: 'HRMIS LMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100`}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
