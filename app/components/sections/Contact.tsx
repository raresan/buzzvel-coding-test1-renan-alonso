interface ContactInfoItem {
  icon: string
  type: string
  value: string
}

interface ContactProps {
  data: {
    eyebrow: string
    title: string
    description: string
    contactInfo: ContactInfoItem[]
    form: {
      title: string
      description: string
      fullNameLabel: string
      fullNamePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submitLabel: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div>
          <h3>{data.eyebrow}</h3>
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          <ul>
            {data.contactInfo.map((info, index) => (
              <li key={index}>
                {/* <Icon name={info.icon} /> */}

                <div>
                  <p>{info.type}</p>
                  <p>{info.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{data.form.title}</h4>
          <p>{data.form.description}</p>

          <form>
            <div>
              <label htmlFor="full-name">{data.form.fullNameLabel}</label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder={data.form.fullNamePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email">{data.form.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={data.form.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="question">{data.form.messageLabel}</label>
              <textarea
                id="question"
                name="question"
                placeholder={data.form.messagePlaceholder}
              />
            </div>

            <button type="submit">{data.form.submitLabel}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
