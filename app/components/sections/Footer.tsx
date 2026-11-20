import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'
import Icon from '../ui/Icon'

interface FooterProps {
  data: {
    logo: string
    slogan: string
    columns: {
      title: string
      links: ClickableProps[]
    }[]
    copyright: string
  }
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-dark-blue text-ink-white-tertiary">
      <div className="section-container pb-5 lg:pt-20 lg:pb-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-between">
          <div className="lg:w-104 shrink-0">
            <Clickable href="/" className="inline-block text-white h-4.5">
              <Icon name={data.logo} className="h-full w-auto" />
            </Clickable>

            <p className="text-sm text-ink-white-tertiary mt-3 lg:max-w-60">
              {data.slogan}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 w-full">
            {data.columns.map((column, index) => (
              <div key={index}>
                <h5 className="text-ink-white-secondary">{column.title}</h5>

                <ul className="text-sm text-ink-white-tertiary mt-4 flex flex-col gap-3">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      <Clickable {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 lg:mt-16 pt-6 text-center lg:text-left border-t border-ink-secondary text-[0.813rem] text-ink-white-secondary">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
