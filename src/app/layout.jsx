import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'

import LayoutsNavbar from '@/app/_layouts/Navbar'
import LayoutsFooter from '@/app/_layouts/Footer'

export const metadata = {
  title: 'Happy Now Studio',
  description: 'Full Stack Web Development Studio',
  url: 'https://happynow.studio',
  twitterUsername: '@happy.now.studio',
  keywords: [
    'hk',
    'hong kong',
    'web development',
    'web design',
    'full stack',
    'react',
    'nextjs',
    'vue',
    'nuxtjs',
    'seo',
    'search engine optimization',
    'ecommerce',
    'shopify',
    'wordpress',
    'woocommerce'
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutsNavbar />
        {children}
        <LayoutsFooter />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  )
}
