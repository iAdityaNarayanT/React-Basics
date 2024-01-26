export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, ready to go! ✈️🌍"
          : `💼 YOU HAVE ${numItems} ITEMS ON YOUR LIST AND YOU ALREADY PACKED
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
