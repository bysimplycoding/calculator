import { useEffect, useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [realTotal, setRealTotal] = useState(null);
  const [operation, setOperation] = useState(null);
  const [prevNum, setPrevNum] = useState(0);

  useEffect(() => setRealTotal(Number(total)), [total])

  function changeNum(num) {
    if (total > 0) {
      setTotal(String(total) + String(num))
      return;
    }
    setTotal(num);
  }

  function operations(op) {
    setPrevNum(realTotal);
    setTotal(0);
    setOperation(op);
  }

  function equals() {
    switch (operation) {
      case "plus":
        setTotal(prevNum + realTotal);
        break;
      case "minus":
        setTotal(prevNum - realTotal);
        break;
      case "div":
        setTotal(prevNum / realTotal);
        break;
      case "multi":
        setTotal(prevNum * realTotal);
        break;
      default:
        console.log("how did you get here?");
        break;
    }
  }

  function clear() {
    setTotal(0);
    setOperation(null);
    setPrevNum(0);
  }

  return (
    <div className="App">
      <input value={total} readOnly></input>
      <div>
        <button onClick={() => operations("plus")}>+</button>
        <button onClick={() => operations("minus")}>-</button>
        <button onClick={() => operations("multi")}>*</button>
        <button onClick={() => operations("div")}>/</button>
        <button onClick={() => clear()}>c</button>
        <button onClick={() => equals()}>=</button>
      </div>
      <div>
        <button onClick={() => changeNum(1)}>1</button>
        <button onClick={() => changeNum(2)}>2</button>
        <button onClick={() => changeNum(3)}>3</button>
        <button onClick={() => changeNum(4)}>4</button>
        <button onClick={() => changeNum(5)}>5</button>
        <button onClick={() => changeNum(6)}>6</button>
        <button onClick={() => changeNum(7)}>7</button>
        <button onClick={() => changeNum(8)}>8</button>
        <button onClick={() => changeNum(9)}>9</button>
        <button onClick={() => changeNum(0)}>0</button>
      </div>
    </div>
  );
}

export default App;
