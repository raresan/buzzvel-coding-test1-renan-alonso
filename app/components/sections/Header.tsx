import type { ClickableProps } from '../ui/Clickable'

import Clickable from '../ui/Clickable'
import Icon from '../ui/Icon'
import Button from '../ui/Button'

interface HeaderProps {
  data: {
    logo: string
    navLinks: ClickableProps[]
    login: ClickableProps
    ctaButton: ClickableProps
  }
}

export default function Header({ data }: HeaderProps) {
  return (
    <header className="bg-light-yellow border-b border-line">
      <div className="section-container py-4 lg:py-3 flex justify-between items-center">
        <Clickable href="/" className="inline-block text-ink-primary h-4.5">
          <Icon name={data.logo} className="h-full w-auto" />
        </Clickable>

        <nav>
          <Clickable className="p-1.5 lg:hidden">
            <Icon name="menu" className="size-6" />
          </Clickable>

          <ul className="text-sm hidden lg:flex items-center gap-8">
            {data.navLinks.map((link, index) => (
              <li key={index}>
                <Clickable {...link} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm hidden lg:flex gap-2 items-center">
          <Clickable href={data.login.href} className="px-4 py-2.5">
            {data.login.label}
          </Clickable>

          <Button href={data.ctaButton.href} size="sm">
            {data.ctaButton.label}
          </Button>
        </div>
      </div>
    </header>
  )
}
