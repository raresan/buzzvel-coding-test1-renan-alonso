import type { ComponentType, SVGProps } from 'react'
import Logo from './Logo'
import Menu from './Menu'

const ICONS = {
  logo: Logo,
  menu: Menu,
} as const satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: string
}

export default function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = ICONS[name as keyof typeof ICONS]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} {...props} />
}
