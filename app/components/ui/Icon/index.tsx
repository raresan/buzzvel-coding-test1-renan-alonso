import type { ComponentType, SVGProps } from 'react'
import Logo from './Logo'

const ICONS = {
  logo: Logo,
} as const satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>

export type IconName = keyof typeof ICONS

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

export function Icon({ name, className, ...props }: IconProps) {
  const IconComponent = ICONS[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} {...props} />
}
