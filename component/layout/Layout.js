import Header from './header/Header'
import Footer from './footer/Footer'
import WhatsAppButton from '@/component/ui/WhatsAppButton'
import SkipToContent from '@/component/ui/SkipToContent'

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
