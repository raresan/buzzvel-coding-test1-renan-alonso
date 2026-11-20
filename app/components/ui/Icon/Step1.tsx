import type { SVGProps } from 'react'

export default function Step1({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
        fill="#E2E8FF"
      />
      <path
        d="M8 14C8 10.6863 10.6863 8 14 8H26C29.3137 8 32 10.6863 32 14V26C32 29.3137 29.3137 32 26 32H14C10.6863 32 8 29.3137 8 26V14Z"
        fill="#3157F6"
      />
    </svg>
  )
}
