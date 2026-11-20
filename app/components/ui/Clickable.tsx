import type { ComponentProps } from 'react'
import Link from 'next/link'

interface ClickableBaseProps {
  label?: string
  className?: string
}

type LinkOrAnchorProps = Omit<
  ComponentProps<typeof Link>,
  'href' | 'className'
> &
  Omit<ComponentProps<'a'>, 'href' | 'className'>

type ClickableAsLink = ClickableBaseProps &
  LinkOrAnchorProps & {
    href: string
    type?: never
  }

type ClickableAsButton = ClickableBaseProps &
  Omit<ComponentProps<'button'>, 'className'> & {
    href?: undefined
  }

export type ClickableProps = ClickableAsLink | ClickableAsButton

function isExternalHref(href: string, target?: string): boolean {
  return target === '_blank' || /^(https?:\/\/|mailto:|tel:)/.test(href)
}

export default function Clickable({
  label,
  className,
  children,
  ...props
}: ClickableProps) {
  const content = children ?? label

  if (typeof props.href === 'string') {
    const { href, target, rel, ...linkProps } = props as ClickableAsLink
    const resolvedRel =
      target === '_blank' ? (rel ?? 'noopener noreferrer') : rel

    if (isExternalHref(href, target)) {
      return (
        <a
          href={href}
          target={target}
          rel={resolvedRel}
          className={className}
          {...(linkProps as Omit<ComponentProps<'a'>, 'href'>)}
        >
          {content}
        </a>
      )
    }

    return (
      <Link
        href={href}
        target={target}
        rel={resolvedRel}
        className={className}
        {...(linkProps as Omit<ComponentProps<typeof Link>, 'href'>)}
      >
        {content}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = props as ClickableAsButton

  return (
    <button type={type} className={className} {...buttonProps}>
      {content}
    </button>
  )
}
