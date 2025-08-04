import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => (
  <>
    <Header />

    <main className='pt-16 '>{children}</main>
    <Footer />
  </>
);

export default Layout;