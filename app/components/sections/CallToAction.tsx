import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

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
    <section className="bg-indigo-500">
      <div>
        <div></div>

        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>

        <div>
          <Clickable {...data.primaryCta} />
          <Clickable {...data.secondaryCta} />
        </div>
      </div>
    </section>
  )
}
