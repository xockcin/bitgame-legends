import React, {useState} from 'react'
import './App.css';

const script = [
  {
    page: 0,
    bitCount: 1,
    text: "This is a byte.",
  },
  {
    page: 1,
    bitCount: 1,
    text: "It can either be on or off.",
  },
  {
    page: 2,
    bitCount: 1,
    text: "Click the byte to turn it on.",
  },
  {
    page: 3,
    bitCount: 1,
    text: "Click it again to turn it off.",
  },
  {
    page: 4,
    bitCount: 1,
    text: "All the data in all the computers in the world is made up of bits.",
  },
  {
    page: 5,
    bitCount: 1,
    text:
      "Data is nothing but bits, each of which can be in only one of two states: on or off.",
  },
  {
    page: 6,
    bitCount: 1,
    text:
      "A bit can be either on or off. It can't be both; it can't be neither.",
  },
  {
    page: 7,
    bitCount: 2,
    text: "Now we have two bits.",
  },
  {
    page: 8,
    bitCount: 2,
    text: "Each one can be either on or off.",
  },
  {
    page: 9,
    bitCount: 2,
    text: "Our single bit could be in one of two states: on or off.",
  },
  {
    page: 10,
    bitCount: 2,
    text: "But our two bits can be in four different states.",
  },
  {
    page: 11,
    bitCount: 2,
    text: "By doubling the number of bits, we have quadrupled the number of possible states",
  },
];

const makeByte = (size) => {
  let result = []
  for (let i=0; i<size; i++) {
    result.push(false)
  }
  return result
}

const OneBit = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <button 
        onClick={() => setIsOn(!isOn)}
        style={isOn ? {backgroundColor: "yellow"} : {backgroundColor: "grey"}}>
        <h3> </h3>
      </button>
    </div>
  );
}

function App() {
  const [thisPage, setThisPage] = useState(0)

  const page = script[thisPage]

  const byte = makeByte(page.bitCount).map(bit => {
    return (
      <div>
        <OneBit />
      </div>
    )
  })

  const text = page.text

  return (
    <div className="container">
      <div className="byte">
        {byte}
      </div>
      <p>
        {text}
      </p>
      <p>{thisPage}</p>
      <button onClick={() => setThisPage(thisPage + 1)}>
        next page
      </button>
    </div>
  )
}

export default App;
