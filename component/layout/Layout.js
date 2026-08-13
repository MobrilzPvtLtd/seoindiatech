import dynamic from 'next/dynamic'
import Header from './header/Header'
import Footer from './footer/Footer'
import SkipToContent from '@/component/ui/SkipToContent'

const WhatsAppButton = dynamic(() => import('@/component/ui/WhatsAppButton'), { ssr: false })

const Layout = ({ children }) => (
  <>
    <SkipToContent />
    <Header />
    <main id="main-content" tabIndex={-1} className="min-w-0 w-full max-w-full">
      {children}
    </main>
    <Footer />
    <WhatsAppButton />
  </>
)

export default Layout
