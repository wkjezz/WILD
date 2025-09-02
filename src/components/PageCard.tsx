
type Props = {
  title?: string
  children: React.ReactNode
}

export default function PageCard({ title, children }: Props) {
  return (
    <section className="pageCard pageStable">
      {title ? <h1>{title}</h1> : null}
      {children}
    </section>
  )
}
