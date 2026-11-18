import { data } from './data'

import Hero from './components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero data={data.hero} />
    </>
  )
}
