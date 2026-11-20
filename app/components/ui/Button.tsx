import clsx from 'clsx'
import Clickable, { type ClickableProps } from './Clickable'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ClickableProps & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 font-jakarta font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary-blue text-white hover:opacity-90',
  secondary:
    'bg-light-yellow text-ink-primary border border-line hover:bg-yellow',
  tertiary: 'bg-secondary-yellow text-ink-primary hover:opacity-90',
  ghost: '',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-base px-5 py-2.5',
  lg: 'text-base px-6 py-3.5',
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
