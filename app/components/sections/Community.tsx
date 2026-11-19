import Image, { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

interface CommunityProps {
  data: {
    eyebrow: string
    title: string
    description: string
    cta: ClickableProps
    communityImage: {
      src: string | StaticImageData
      alt: string
    }
  }
}

export default function Community({ data }: CommunityProps) {
  return (
    <section className="bg-cyan-500">
      <div>
        <h3>{data.eyebrow}</h3>
        <h2>{data.title}</h2>
        <p>{data.description}</p>

        <div>
          <Clickable {...data.cta} />
        </div>
      </div>

      <div>
        <Image
          src={data.communityImage.src}
          alt={data.communityImage.alt}
          width={530}
          height={522}
        />
      </div>
    </section>
  )
}
