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
