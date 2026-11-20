import Image, { StaticImageData } from 'next/image'

import Icon from '../ui/Icon'

interface TestimonialMetric {
  value: string
  label: string
}

interface TestimonialProps {
  data: {
    icon: string
    quote: string
    author: {
      name: string
      role: string
      avatar: string | StaticImageData
    }
    metrics: TestimonialMetric[]
  }
}

export default function Testimonial({ data }: TestimonialProps) {
  return (
    <section className="bg-white">
      <div className="section-container lg:flex lg:gap-33.75 lg:items-center">
        <div className="lg:w-150 shrink-0">
          <div>
            <Icon name={data.icon} className="w-6" />

            <blockquote className="font-jakarta text-xl lg:text-3xl font-semibold text-ink-primary leading-[1.6] lg:leading-[1.46] lg:tracking-[-0.75px] mt-4">
              <p>{data.quote}</p>
            </blockquote>
          </div>

          <div className="mt-8 flex gap-4 items-center">
            <Image
              src={data.author.avatar}
              alt={data.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />

            <div>
              <p className="font-bold leading-relaxed text-ink-primary">
                {data.author.name}
              </p>

              <p className="text-sm leading-[1.6] text-ink-secondary">
                {data.author.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-15 lg:mt-0 lg:border-l lg:border-line lg:pl-12">
          <ul className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5">
            {data.metrics.map((metric, index) => (
              <li key={index} className="flex flex-col gap-1">
                <strong className="font-jakarta text-primary-blue font-extrabold leading-[1.1] text-[2.5rem] lg:text-[4rem] lg:tracking-[-1.6px]">
                  {metric.value}
                </strong>

                <span className="text-ink-tertiary text-sm leading-[1.7]">
                  {metric.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
