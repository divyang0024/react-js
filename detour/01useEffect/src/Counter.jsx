import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("divyang");
  //   useEffect(() => {
  //     console.log("useEffect invoked.");
  //   });works on every render
  useEffect(() => {
    console.log("first render.");
    return () => console.log("cleanup");
  }, []); //called when first render is made or when component is unmount.
  useEffect(() => {
    console.log("count changed to ", count);
  }, [count]); //invoked only when changes are made into count.
  useEffect(() => {
    console.log("name changed to", name);
  }, [name]); //invoked only when changes made into count.
  return (
    <>
      <div>count : {count}</div>
      <div>count : {name}</div>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setName("dv")}>update name</button>
    </>
  );
}
