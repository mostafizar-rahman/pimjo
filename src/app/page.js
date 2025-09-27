import AdsBanner from "@/component/client/adsBanner"
import FeaturedProducts from "@/component/client/featuredProducts"
import Footer from "@/component/client/footer"
import Header from "@/component/client/header"
import Hero from "@/component/client/hero"
import ShopbyCategory from "@/component/client/shopByCategory"
import Testimonial from "@/component/client/testimonial"

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