import Image, { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Button from '../ui/Button'
import Icon from '../ui/Icon'

interface FeatureCourseProps {
  data: {
    eyebrow: string
    title: string
    description: string
    author: {
      name: string
      title: string
    }
    labels: string[]
    primaryCta: ClickableProps
    secondaryCta: ClickableProps
    courseImage: {
      src: string | StaticImageData
      alt: string
    }
    badgeLabel: string
  }
}

export default function FeaturedCourse({ data }: FeatureCourseProps) {
  return (
    <section className="bg-primary-blue text-white">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 items-center gap-9.5 lg:gap-15">
        <div className="relative">
          <div className="text-xs tracking-[0.12em] uppercase font-semibold text-ink-primary bg-secondary-yellow py-1.5 px-3 rounded-md absolute -top-3 -left-3 z-1">
            {data.badgeLabel}
          </div>

          <div className="rounded-2xl relative overflow-hidden w-full aspect-[1.3]">
            <Image
              src={data.courseImage.src}
              alt={data.courseImage.alt}
              fill
              aria-hidden="true"
              draggable={false}
              className="pointer-events-none select-none object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-white">{data.eyebrow}</h3>

          <h2 className="text-white mt-4">{data.title}</h2>

          <p className="mt-5 text-sm lg:text-base leading-[1.7] lg:leading-[1.75]">
            {data.description}
          </p>

          <p className="mt-6 text-sm lg:text-base leading-[1.7] lg:leading-[1.75]">
            with {data.author.name} · {data.author.title}
          </p>

          <ul className="mt-6 flex gap-3 flex-wrap">
            {data.labels.map((label, index) => (
              <li
                key={index}
                className="border border-line h-9.5 px-3.5 flex items-center rounded-lg whitespace-nowrap"
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col lg:flex-row gap-3">
            <Button href={data.primaryCta.href} variant="tertiary">
              {data.primaryCta.label}
            </Button>

            <Button
              href={data.secondaryCta.href}
              variant="ghost"
              className="flex items-center gap-2"
            >
              {data.secondaryCta.label}

              <div className="size-5 p-1">
                <Icon name="arrow" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
