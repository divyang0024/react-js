import { useState } from "react";

function updatedComp(ComponentHandle) {
  const newComp = () => {
    const [money, setMoney] = useState(10);
    const handleIncrease = () => {
      setMoney((prevState) => prevState * 2);
    };

    return (
      <ComponentHandle
        handleIncrease={handleIncrease}
        money={money}
      ></ComponentHandle>
    );
  };
  return newComp;
}

export default updatedComp;
