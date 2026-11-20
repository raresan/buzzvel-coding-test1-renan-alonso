import type { SVGProps } from 'react'

export default function Menu({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 12"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0.75 5.75H12.75M7.75 10.75L12.75 5.75L7.75 0.75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}
