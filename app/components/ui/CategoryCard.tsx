export interface CategoryCardProps {
  id: string
  title: string
  description: string
  linkText: string
  href: string
}

export default function CategoryCard({
  id,
  title,
  description,
  linkText,
  href,
}: CategoryCardProps) {
  return (
    <div>
      <div>{id}</div>

      <h4>{title}</h4>

      <p>{description}</p>

      <div>
        <a href={href}>{linkText}</a>
      </div>
    </div>
  )
}
