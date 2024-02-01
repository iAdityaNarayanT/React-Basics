export default function Output({ tip, bill }) {
  return (
    <>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </>
  );
}
