import { useEffect, useState } from "react";
import ChangeBg from "./Backgroundcolor";

function App() {
  let [count, setcount] = useState(0);
  let [countt, setcountt] = useState(false);

  useEffect(() => {
    alert("call");
  }, [count, countt]);
  return (
    <>
      {count}
      {countt}
      <button onClick={() => setcount(count + 1)}>Incre</button>
      <button onClick={() => setcount(!countt)}>TF</button>
      <ChangeBg/>
    </>
  );
}

export default App;
