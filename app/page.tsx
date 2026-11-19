import { data } from './data'

import Hero from './components/sections/Hero'
import Categories from './components/sections/Categories'
import FeaturedCourse from './components/sections/FeaturedCourse'

export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
      <Categories data={data.categories} />
      <FeaturedCourse data={data.featuredCourse} />
    </>
  )
}
