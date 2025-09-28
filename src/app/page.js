import AdsBanner from "@/component/clientSection/adsBanner"
import FeaturedProducts from "@/component/clientSection/featuredProducts"
import Footer from "@/component/clientSection/footer"
import Header from "@/component/clientSection/header"
import Hero from "@/component/clientSection/hero"
import ShopbyCategory from "@/component/clientSection/shopByCategory"
import Testimonial from "@/component/clientSection/testimonial"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShopbyCategory />
      <FeaturedProducts />
      <Testimonial />
      <AdsBanner />
      <Footer />
    </>
  )
}

export default Home