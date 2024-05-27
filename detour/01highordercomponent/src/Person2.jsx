import updatedComp from "./HOC";

function Person2({ handleIncrease, money }) {
  return (
    <div>
      <h1>Sal item auction : ${money}</h1>
      <button onClick={handleIncrease}>Bid for sal</button>
    </div>
  );
}

export default updatedComp(Person2);
