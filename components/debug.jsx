import React from 'react';

export default function Debug() {
  let count = 0;

  const increment = () => {
    count = count + 1;
    console.log('count is now', count);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
