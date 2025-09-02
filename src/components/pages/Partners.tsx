
import PageCard from '../PageCard'
import './Partners.css'

export default function Partners() {
  return (
    <PageCard title="Partners">
      <div className="grid">
        {Array.from({length:6}).map((_,i)=>(<div className="tile" key={i}>Logo {i+1}</div>))}
      </div>
    </PageCard>
  )
}
