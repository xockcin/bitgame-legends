const TenBit = () => {
  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button
        onClick={() => setNumber(number === 9 ? 0 : number + 1)}
        style={{ backgroundColor: colors[number] }}
      >
        <h3> </h3>
      </button>
    </div>
  );
};
