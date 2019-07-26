import React, { useState, useMemo } from 'react';

const MemoTester = () => {
  const [inputValue, setInputValue] = useState('');

  const [startingNumber, setStartingNumber] = useState(0);
  const seriouslyAddingNumbersFromXtoTrillion = (x) => {
    let result = 0;
    let i = x;
    while (i < (10 ** 9)) {
      result += i;
      i += 1;
    }
    return result;
  };

  const expensiveFunctionResult =
    useMemo(() => seriouslyAddingNumbersFromXtoTrillion(startingNumber), [startingNumber]);

  return (
    <div style={styles.container}>
      <div>
        Here is the expensive result:
        {expensiveFunctionResult}
      </div>
      <div>
        <span>Set Starting Number: </span>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <span onClick={() => setStartingNumber(parseInt(inputValue, 10))}>
          ✅
        </span>
      </div>
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

export { MemoTester };
