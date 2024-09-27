import Promo from "@/components/HomePage/Promo";
import Boost from "@/components/HomePage/Boost";
import Care from "@/components/HomePage/Care";
import Cashback from "@/components/HomePage/Cashback";
import Partners from "@/components/HomePage/Partners";
import Cards from "@/components/HomePage/Cards";
import Fees from "@/components/HomePage/Fees";
import Currencies from "@/components/HomePage/Currencies";
import Account from "@/components/HomePage/Account";
import Footer from "@/components/HomePage/Footer";

export default function Home() {
  return (
    <>
      <Promo/>
      <Boost/>
      <Care/>
      <Cashback/>
      <Partners/>
      <Cards/>
      <Fees/>
      <Currencies/>
      <Account/>
      <Footer/>
    </>
  )
}
