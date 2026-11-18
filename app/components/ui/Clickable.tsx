export interface ClickableProps {
  label: string
  href: string
}

export default function Clickable({ label, href }: ClickableProps) {
  return <a href={href}>{label}</a>
}
