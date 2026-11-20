import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'

interface HeaderProps {
  data: {
    logoText: string
    navLinks: ClickableProps[]
    login: ClickableProps
    ctaButton: ClickableProps
  }
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="bg-light-yellow border-b border-line">
      <div className="section-container">
        <div>{data.logoText}</div>

        <nav>
          <ul>
            {data.navLinks.map((link, index) => (
              <li key={index}>
                <Clickable {...link} />
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <Clickable {...data.login} />
          <Clickable {...data.ctaButton} />
        </div>
      </div>
    </header>
  )
}
