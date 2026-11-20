import Image from 'next/image'

import Button from '../ui/Button'
import type { ClickableProps } from '../ui/Clickable'

interface CallToActionProps {
  data: {
    title: string
    subtitle: string
    avatars: string[]
    primaryCta: ClickableProps
    secondaryCta: ClickableProps
  }
}

export default function CallToAction({ data }: CallToActionProps) {
  return (
    <section className="bg-yellow text-center relative">
      <div className="absolute inset-0">
        <Image
          src="/images/call-to-action-icons-background.png"
          alt="Call to Action Icons Background"
          fill
          objectFit="cover"
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none select-none"
        />
      </div>

      <div className="section-container">
        <div className="flex items-center justify-center">
          {data.avatars.map((avatar, index) => (
            <Image
              key={index}
              src={avatar}
              alt="User picture"
              width={40}
              height={40}
              className="border-2 border-secondary-yellow rounded-full -ml-2 first:ml-0"
            />
          ))}
        </div>

        <h2 className="mt-8">{data.title}</h2>
        <p className="text-ink-secondary mt-4">{data.subtitle}</p>

        <div className="mt-10 flex items-center justify-center flex-col lg:flex-row gap-3">
          <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>

          <Button href={data.secondaryCta.href} variant="secondary">
            {data.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
