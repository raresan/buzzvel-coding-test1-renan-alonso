import { data } from './data'

import Hero from './components/sections/Hero'
import Categories from './components/sections/Categories'
import FeaturedCourse from './components/sections/FeaturedCourse'
import HowItWorks from './components/sections/HowItWorks'
import Testimonial from './components/sections/Testimonial'
import Community from './components/sections/Community'
import Contact from './components/sections/Contact'
import CallToAction from './components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <Categories data={data.categories} />
      <FeaturedCourse data={data.featuredCourse} />
      <HowItWorks data={data.howItWorks} />
      <Testimonial />
      <Community />
      <Contact />
      <CallToAction />
    </>
  )
}
