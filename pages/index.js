import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/HeroSection/Hero'
import Services from '../components/ServicesSection/Services'
import Images from '../components/ImagesSection/Images'
import Achievements from '../components/AchievementsSection/Achievements'
import Blog from '../components/BlogSection/Blog'
import Pricing from '../components/PricingSection/Pricing'
import Testimonials from '../components/TestimonialsSection/Testimonials'
import Performance from '../components/PerformanceSection/Performance'
import Contact from '../components/ContactUsSection/Contact'
import Footer from '../components/FooterSection/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navAndHeroBackground}>
        <Navbar/>
        <Hero/>
      </div>
      <Services/>
      <Images/>
      <Achievements/>
      <Blog/>
      <Pricing/>
      <Testimonials/>
      <Performance/>
      <Contact/>
      <Footer/>
    </div>
  )
}
