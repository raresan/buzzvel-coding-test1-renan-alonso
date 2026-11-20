import type { ComponentType, SVGProps } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Quote from './Quote'
import Arrow from './Arrow'

const ICONS = {
  logo: Logo,
  menu: Menu,
  step1: Step1,
  step2: Step2,
  step3: Step3,
  quote: Quote,
  arrow: Arrow,
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
