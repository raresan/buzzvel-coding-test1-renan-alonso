import Button from '../ui/Button'
import Clickable from '../ui/Clickable'
import Icon from '../ui/Icon'

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
      <div className="section-container lg:grid lg:grid-cols-2 lg:items-center">
        <div className="lg:max-w-120">
          <h3>{data.eyebrow}</h3>
          <h2 className="mt-4">{data.title}</h2>
          <p className="mt-4 text-ink-secondary text-sm lg:text-lg leading-[1.7] lg:leading-[1.55]">
            {data.description}
          </p>

          <ul className="flex gap-4 flex-col mt-8 lg:mt-10">
            {data.contactInfo.map((info, index) => (
              <li
                key={index}
                className="bg-light-yellow rounded-xl flex items-center gap-4 p-4"
              >
                <div className="bg-primary-blue-light text-primary-blue rounded-lg size-10 p-2.5">
                  <Icon name={info.icon} />
                </div>

                <div>
                  <p className="text-sm text-ink-primary mb-1">{info.type}</p>

                  {info.type === 'Email' ? (
                    <Clickable
                      href={`mailto:${info.value}`}
                      className="text-primary-blue text-sm"
                    >
                      {info.value}
                    </Clickable>
                  ) : (
                    <p className="text-sm text-ink-tertiary">{info.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 lg:mt-0 rounded-2xl border border-line px-5 py-6 lg:p-10">
          <h4>{data.form.title}</h4>
          <p className="text-ink-secondary mt-2 text-sm">
            {data.form.description}
          </p>

          <form className="mt-6">
            <div className="flex gap-2 flex-col">
              <label
                className="font-bold text-sm text-ink-primary"
                htmlFor="full-name"
              >
                {data.form.fullNameLabel}
              </label>

              <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder={data.form.fullNamePlaceholder}
                className="bg-light-yellow border border-line rounded-lg px-4 py-3 text-sm text-ink-tertiary placeholder:text-ink-tertiary"
              />
            </div>

            <div className="flex gap-2 flex-col mt-5">
              <label
                className="font-bold text-sm text-ink-primary"
                htmlFor="email"
              >
                {data.form.emailLabel}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder={data.form.emailPlaceholder}
                className="bg-light-yellow border border-line rounded-lg px-4 py-3 text-sm text-ink-tertiary placeholder:text-ink-tertiary"
              />
            </div>

            <div className="flex gap-2 flex-col mt-5">
              <label
                className="font-bold text-sm text-ink-primary"
                htmlFor="question"
              >
                {data.form.messageLabel}
              </label>

              <textarea
                id="question"
                name="question"
                placeholder={data.form.messagePlaceholder}
                className="bg-light-yellow border border-line rounded-lg px-4 py-3 text-sm text-ink-tertiary placeholder:text-ink-tertiary h-25 lg:h-30"
              />
            </div>

            <Button type="submit" className="mt-6">
              {data.form.submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
