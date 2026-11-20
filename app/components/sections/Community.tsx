import Image, { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Button from '../ui/Button'

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
    <section className="bg-light-yellow">
      <div className="section-container flex flex-col items-center lg:flex-row gap-5.5 lg:gap-15">
        <div>
          <h3>{data.eyebrow}</h3>
          <h2 className="mt-2">{data.title}</h2>
          <p className="mt-6 lg:mt-8">{data.description}</p>

          <Button
            variant="secondary"
            href={data.cta.href}
            className="mt-6 lg:mt-8"
          >
            {data.cta.label}
          </Button>
        </div>

        <div className="shrink-0">
          <Image
            src={data.communityImage.src}
            alt={data.communityImage.alt}
            width={530}
            height={522}
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  )
}
