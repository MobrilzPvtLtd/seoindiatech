import Layout from "@/component/layout/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes"; 

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}


