import Image from 'next/image'
import { StaticImageData } from 'next/image'

import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

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
    <section className="bg-yellow-500">
      <div>
        <div>{data.badgeLabel}</div>

        <Image
          src={data.courseImage.src}
          alt={data.courseImage.alt}
          width={538}
          height={408}
        />
      </div>

      <div>
        <h3>{data.eyebrow}</h3>

        <h2>{data.title}</h2>

        <p>{data.description}</p>

        <p>
          with {data.author.name} · {data.author.title}
        </p>

        <ul>
          {data.labels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>

        <div>
          <Clickable {...data.primaryCta} />
          <Clickable {...data.secondaryCta} />
        </div>
      </div>
    </section>
  )
}
