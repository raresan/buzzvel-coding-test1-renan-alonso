import type { CategoryCardProps } from '../ui/CategoryCard'

import CategoryCard from '../ui/CategoryCard'
interface CategoriesProps {
  data: {
    eyebrow: string
    title: string
    description: string
    items: CategoryCardProps[]
  }
}

export default function Categories({ data }: CategoriesProps) {
  return (
    <section className="bg-blue-500">
      <h3>{data.eyebrow}</h3>
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div>
        {data.items.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
