import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

interface FooterProps {
  data: {
    logoText: string
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
      <div>
        <div>
          <div>{data.logoText}</div>

          <p>{data.slogan}</p>
        </div>

        {data.columns.map((column, index) => (
          <div key={index}>
            <h5>{column.title}</h5>

            <ul>
              {column.links.map((link, index) => (
                <li key={index}>
                  <Clickable {...link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <p>{data.copyright}</p>
      </div>
    </footer>
  )
}
