import * as React from 'react'

interface VeggieProps {
  name: string,
  canWater: boolean,
  water: () => void
}

function Veggie(props: VeggieProps) {
  const [waterCount, setWaterCount] = React.useState(0)

  function onClick() {
    if (props.canWater) {
      setWaterCount(waterCount + 1)
      props.water()
    }
  }

  return <div>
    <p>{props.name} has been watered {waterCount} times.</p>
    <button onClick={onClick}>water</button>
  </div>
}

export default function App() {
  const veggies = ["Pak Choi", "Chili"]
  const [waterCanIsFull, fillWaterCan] = React.useState(true)

  function water() {
    fillWaterCan(false)
  }

  return <>
    {
      veggies.map(veggie => <Veggie name={veggie}
        canWater={waterCanIsFull}
        water={water} />)
    }
    <br />
    Watering can is {waterCanIsFull ? 'full ' : 'empty '}
    <button onClick={() => fillWaterCan(true)}> Refill </button>
  </>
}