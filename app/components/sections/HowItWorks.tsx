import clsx from 'clsx'
import Icon from '../ui/Icon'

interface HowItWorksItem {
  icon: string
  eyebrow: string
  title: string
  description: string
}

interface HowItWorksProps {
  data: {
    eyebrow: string
    title: string
    items: HowItWorksItem[]
  }
}

export default function HowItWorks({ data }: HowItWorksProps) {
  return (
    <section className="bg-light-yellow">
      <div className="section-container">
        <div className="text-center">
          <h3>{data.eyebrow}</h3>
          <h2 className="mt-4">{data.title}</h2>
        </div>

        <div className="mt-10 lg:mt-20 lg:py-7 grid grid-cols-1 lg:grid-cols-3 gap-20">
          {data.items.map((item, index) => (
            <div key={index} className="relative">
              {/* mobile bottom = 100% - 6px extra height, so it hides behind the icon */}
              {/* desktop width = column width + gap */}
              <div
                className={clsx(
                  'absolute bg-line left-7 lg:left-0 bottom-[calc(100%-0.375rem)] lg:bottom-auto lg:top-7 h-14 lg:h-px w-px lg:w-[calc(100%+5rem)]',
                  index === 0 && 'hidden lg:block',
                  index === 2 && 'lg:hidden',
                )}
              />

              <Icon name={item.icon} className="w-14 relative" />

              <h5 className="mt-6">{item.eyebrow}</h5>
              <h4 className="mt-2">{item.title}</h4>

              <p className="mt-3 text-sm text-ink-secondary leading-[1.7] lg:leading-[1.75]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
