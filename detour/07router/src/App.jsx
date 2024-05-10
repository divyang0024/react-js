import { useState } from "react";
import { Suspense, lazy } from "react";
const Comp1 = lazy(() => import("./Comp1"));
const Comp2 = lazy(() => import("./Comp2"));
function App() {
  return (
    <>
      <Comp1 />
      <Suspense fallback={<h2>component is lazy loading.</h2>}>
        <Comp2 />
      </Suspense>
    </>
  );
}

export default App;
