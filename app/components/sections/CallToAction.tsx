import Button from '../ui/Button'
import type { ClickableProps } from '../ui/Clickable'

interface CallToActionProps {
  data: {
    title: string
    subtitle: string
    primaryCta: ClickableProps
    secondaryCta: ClickableProps
  }
}

export default function CallToAction({ data }: CallToActionProps) {
  return (
    <section className="bg-yellow text-center">
      <div className="section-container">
        <div>[ICONS]</div>

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
