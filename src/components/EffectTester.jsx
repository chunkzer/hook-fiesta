import React, { useState, useEffect } from 'react';

const EffectTester = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const crabArray = [...Array(count + 1)].map(() => '🦀');
  return (
    <div style={styles.container}>
      <p>How many clicks?</p>
      <p>{count}</p>
      <span onClick={() => setCount(count + 1)}>
        {crabArray}
      </span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
};

export { EffectTester };
