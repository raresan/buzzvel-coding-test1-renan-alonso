interface HowItWorksItem {
  icon: string
  eyebrow: string
  title: string
  description: string
}

interface HowItWorksProps {
  data: {
    eyebrow: string
    title: string
    items: HowItWorksItem[]
  }
}

export default function HowItWorks({ data }: HowItWorksProps) {
  return (
    <section className="bg-light-yellow">
      <div>
        <h3>{data.eyebrow}</h3>
        <h2>{data.title}</h2>
      </div>

      <div>
        {data.items.map((item, index) => (
          <div key={index}>
            {/* <Icon name={item.icon} /> */}

            <h5>{item.eyebrow}</h5>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
