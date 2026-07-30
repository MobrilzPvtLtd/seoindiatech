import Header from './header/Header'
import Footer from './footer/Footer'
import WhatsAppButton from '@/component/ui/WhatsAppButton'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
  </>
)

export default Layout
