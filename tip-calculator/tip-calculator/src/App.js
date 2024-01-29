import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 ? (
        <>
          <Output tip={tip} bill={bill} />
        </>
      ) : null}
      <Reset onReset={handleReset} />
    </>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
function BillInput({ bill, onsetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ onSelect, percentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ tip, bill }) {
  return (
    <>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </>
  );
}
