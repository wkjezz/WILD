
import PageCard from '../PageCard'
import './Team.css'

export default function Team() {
  const members = ['Editor-in-Chief','Producer','Designer','Community']
  return (
    <PageCard title="Team">
      <ul className="bullet">
        {members.map(m => <li key={m}>{m}</li>)}
      </ul>
    </PageCard>
  )
}
