import {useState} from "react"

const OneBit = ({value, toggle}) => {
  const [isOn, setIsOn] = useState(value)
  return (
    <div>
      <button
        onClick={() => setIsOn(!isOn)}
        style={isOn ? { backgroundColor: "yellow" } : { backgroundColor: "grey" }}
      >
        <h3> </h3>
      </button>
    </div>
  );
};

export default OneBit
