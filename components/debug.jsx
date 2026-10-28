import React, { useEffect, useState } from 'react';

const Debug = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
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
};

export default Debug;
