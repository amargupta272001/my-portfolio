import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import { useRouter } from "next/router"
import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${montserrat.variable} dark:bg-black-100 dark:bg-bgCustomGradientDark font-sans w-full min-h-screen`}> */}
      <main className={`${montserrat.variable} bg-bgCustomGradient dark:bg-bgCustomGradientDark font-sans w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
