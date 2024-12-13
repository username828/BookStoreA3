import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { AuthContextProvider } from "@/store/AuthContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>

 
      <Layout>

      <Component {...pageProps} />


      </Layout>
    </AuthContextProvider>


  )
}
