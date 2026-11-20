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
    <section className="bg-white">
      <div className="section-container flex flex-col gap-12 lg:gap-10">
        <div className="flex flex-col gap-4 max-w-140">
          <h3>{data.eyebrow}</h3>
          <h2>{data.title}</h2>
          <p className="text-base lg:text-lg leading-relaxed lg:leading-6">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5">
          {data.items.map((item, index) => (
            <CategoryCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
