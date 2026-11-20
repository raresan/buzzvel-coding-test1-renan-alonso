import type { SVGProps } from 'react'

export default function Clock({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 19 19"
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M9.334 4.3336V9.334L12.6676 11.0008M17.668 9.334C17.668 13.9367 13.9367 17.668 9.334 17.668C4.73126 17.668 1 13.9367 1 9.334C1 4.73126 4.73126 1 9.334 1C13.9367 1 17.668 4.73126 17.668 9.334Z"
        strokeWidth="2"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  )
}
