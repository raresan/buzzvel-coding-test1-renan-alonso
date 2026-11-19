import Image, { StaticImageData } from 'next/image'
interface TestimonialMetric {
  value: string
  label: string
}

interface TestimonialProps {
  data: {
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
    <section className="bg-amber-500">
      <div>
        <div>
          <span aria-hidden="true">“</span>
          <blockquote>
            <p>{data.quote}</p>
          </blockquote>
        </div>

        <div>
          <Image
            src={data.author.avatar}
            alt={data.author.name}
            width={48}
            height={48}
          />

          <div>
            <p>{data.author.name}</p>
            <p>{data.author.role}</p>
          </div>
        </div>
      </div>

      <div>
        <ul>
          {data.metrics.map((metric, index) => (
            <li key={index}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
