import type { SVGProps } from 'react'

export default function Menu({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-label="menu button"
      {...props}
    >
      <path
        d="M3 7H21M3 12H21M3 17H21"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  )
}
