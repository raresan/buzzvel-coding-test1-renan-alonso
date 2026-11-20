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
      srcMobile: StaticImageData | string
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
          <h1 className="mt-4">{data.title}</h1>

          <p className="mt-6">{data.description}</p>

          <div className="mt-8 flex flex-col lg:flex-row items-center gap-3">
            <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>

            <Button href={data.secondaryCta.href} variant="secondary">
              {data.secondaryCta.label}
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start mt-8 gap-3">
            <div className="flex items-center">
              {data.socialProof.avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt="User picture"
                  width={32}
                  height={32}
                  className="border-2 border-light-yellow rounded-full -ml-2 first:ml-0"
                />
              ))}
            </div>

            <p className="text-sm">
              <strong className="text-ink-primary font-bold">
                {data.socialProof.highlightText}
              </strong>{' '}
              {data.socialProof.text}
            </p>
          </div>
        </div>

        <div className="relative lg:w-146 aspect-square lg:aspect-[1.12] shrink-0 -mx-2.5 lg:-mr-10 lg:ml-0">
          <Image
            src={data.heroImage.srcMobile}
            alt={data.heroImage.alt}
            fill
            objectFit="contain"
            priority
            className="lg:hidden"
          />

          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            fill
            objectFit="contain"
            priority
            className="hidden lg:block"
          />

          <div className="bg-white rounded-xl absolute top-1.5 lg:top-4 left-2 lg:left-5.5 py-3 px-4 flex gap-3 items-center shadow-[0px_4px_24px_0px_#0000001A]">
            <div className="bg-primary-blue-light rounded-lg p-1 font-bold text-sm text-primary-blue">
              {data.upperBadgeHighlight}
            </div>

            <span className="text-sm text-ink-primary">
              {data.upperBadgeText}
            </span>
          </div>

          <div className="absolute bottom-9 right-0 lg:-right-4.5 bg-white rounded-xl py-3 px-4 flex items-center gap-2 shadow-[0px_4px_24px_0px_#0000001A]">
            <div className="relative w-19.5 h-3.5">
              <Image
                src="/images/rating-stars.png"
                alt="Rating Stars"
                fill
                objectFit="contain"
              />
            </div>

            <span className="text-sm text-ink-primary whitespace-nowrap">
              {data.lowerBadgeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
