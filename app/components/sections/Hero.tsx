import Image, { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Button from '../ui/Button'

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
      <div className="section-container flex flex-col-reverse lg:flex-row gap-10 lg:gap-4">
        <div>
          <h3>{data.eyebrow}</h3>
          <h1>{data.title}</h1>

          <p>{data.description}</p>

          <div>
            <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>

            <Button href={data.secondaryCta.href} variant="secondary">
              {data.secondaryCta.label}
            </Button>
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

        <div className="relative lg:w-146 aspect-[1.12] shrink-0 -mr-4.5 lg:-mr-10">
          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            fill
            objectFit="contain"
            priority
          />

          <div className="bg-white rounded-xl absolute top-2 left-6 py-3 px-4 flex gap-3 items-center">
            <div className="bg-primary-blue-light rounded-lg p-1 font-bold text-sm text-primary-blue">
              {data.upperBadgeHighlight}
            </div>

            <span className="text-sm text-ink-primary">
              {data.upperBadgeText}
            </span>
          </div>

          <div className="absolute bottom-0 right-0 bg-white rounded-xl py-3 px-4">
            <div className="relative h-3.5">
              <Image
                src="/images/rating-stars.png"
                alt="Rating Stars"
                fill
                objectFit="contain"
              />
            </div>

            <span className="text-sm text-ink-primary">
              {data.lowerBadgeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
