import clsx from 'clsx'
import Clickable, { type ClickableProps } from './Clickable'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ClickableProps & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const BASE_CLASSES =
  'text-sm inline-flex items-center justify-center font-bold rounded-lg transition-colors cursor-pointer'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary-blue text-white',
  secondary: 'bg-white text-ink-primary border border-line',
  tertiary: 'bg-secondary-yellow text-ink-primary',
  ghost: 'text-ink-white-secondary',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'w-full lg:w-auto lg:px-5 h-11',
  md: 'w-full lg:w-auto lg:px-7 h-13',
  lg: 'w-full lg:w-auto lg:px-7 h-13.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...clickableProps
}: ButtonProps) {
  return (
    <Clickable
      className={clsx(
        BASE_CLASSES,
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
      {...clickableProps}
    />
  )
}
