import Clickable from './Clickable'

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
    <div className="border border-line rounded-2xl p-6 lg:p-7 flex flex-col items-start justify-between gap-5.5">
      <div>
        <div className="text-primary-blue font-semibold text-xs px-2 py-1 bg-primary-blue-light inline-block rounded-md">
          {id}
        </div>

        <h4 className="text-xl font-jakarta font-bold text-ink-primary mt-5">
          {title}
        </h4>

        <p className="text-ink-tertiary text-sm leading-[1.7] mt-3">
          {description}
        </p>
      </div>

      <Clickable
        href={href}
        className="text-ink-primary font-bold text-sm leading-[1.7]"
      >
        {linkText}
      </Clickable>
    </div>
  )
}
