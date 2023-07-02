import {BsLightningCharge, BsEye} from 'react-icons/bs';
import {BiBrain} from 'react-icons/bi';
import {PiChatCircleTextThin} from 'react-icons/pi';
const summary = [
  {
    Icon: BsLightningCharge,
    name: "Reaction",
    rating: 80,
    color: "red"
  },
  {
    
    Icon: BiBrain,
    name: "Memory",
    rating: 92,
    color:"yellow"
  },
  {
    Icon: PiChatCircleTextThin,
    name: "Verbal",
    rating: 61,
    color: "green"
  },
  {
    Icon: BsEye,
    name: "Visual",
    rating: 72,
    color: "blue"
  }
];


export default function Home() {
  return (
    <main className="card">
      <div className='result-card'>
        <h3>Your Result</h3>
        <div className='circle'>
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='summary-card'>
        <h3>Summary</h3>
        <div className='summary-collection'>
        {summary.map(items => {
            const {Icon, name, rating, color, index} = items
            return (
              <div key={index} className={`summary-item bg${color}`}>
                <span className={`sumName sum-${color}`}><Icon/>{name}</span>
                <p>{rating} <span className='over'>/100</span></p>
              </div>
            )
          })}
        </div>
        <button>Continue</button>
      </div>
    </main>
  )
}
