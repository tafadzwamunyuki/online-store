import { Inter } from "next/font/google"
import Header from "./Header"
import Footer from "./Footer"
import Meta from "./Meta"

const inter = Inter({
    subsets: ["latin-ext"],
    variables: ["font-family"],
})

export default function Layout({children}) {
  return (
    <div className={`${inter.variables} font-sans min-h-screen flex flex-col`}>
        <Meta />
        <Header />
      <main className="flex-grow bg-[#f7f7f7]">
        {children}
      </main>
      <Footer />
    </div>
  )
}
