import updatedComp from "./HOC";

function Person1({ handleIncrease, money }) {
  return (
    <div>
      <h1>Joe item auction : ${money}</h1>
      <button onClick={handleIncrease}>Bid for joe</button>
    </div>
  );
}

export default updatedComp(Person1);
