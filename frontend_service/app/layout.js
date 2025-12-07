import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout'

export const metadata = {
  title: 'yuhnie ❤️!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
