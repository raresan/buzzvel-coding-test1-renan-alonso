import Image, { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

interface SocialProof {
  highlightText: string
  text: string
  avatars: string[]
}

interface HeroProps {
  data: {
    eyebrow: string
    title: string
    description: string
    primaryCta: ClickableProps
    secondaryCta: ClickableProps
    socialProof: SocialProof
    heroImage: {
      src: StaticImageData | string
      alt: string
    }
    upperBadgeHighlight: string
    upperBadgeText: string
    lowerBadgeText: string
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="bg-light-yellow">
      <div>
        <h3>{data.eyebrow}</h3>
        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <div>
          <Clickable {...data.primaryCta} />
          <Clickable {...data.secondaryCta} />
        </div>

        <div>
          <div>
            {data.socialProof.avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar}
                alt="User picture"
                width={32}
                height={32}
              />
            ))}
          </div>

          <p>
            <strong>{data.socialProof.highlightText}</strong>{' '}
            {data.socialProof.text}
          </p>
        </div>
      </div>

      <div>
        <Image
          src={data.heroImage.src}
          alt={data.heroImage.alt}
          width={500}
          height={520}
          priority
        />
        <div>
          <div>{data.upperBadgeHighlight}</div>
          <span>{data.upperBadgeText}</span>
        </div>

        <div>
          <span>{data.lowerBadgeText}</span>
        </div>
      </div>
    </section>
  )
}
