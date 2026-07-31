import dynamic from 'next/dynamic'
import Header from './header/Header'
import Footer from './footer/Footer'
import SkipToContent from '@/component/ui/SkipToContent'

const WhatsAppButton = dynamic(() => import('@/component/ui/WhatsAppButton'), { ssr: false })

const Layout = ({ children }) => (
  <>
    <SkipToContent />
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
    <WhatsAppButton />
  </>
)

export default Layout
