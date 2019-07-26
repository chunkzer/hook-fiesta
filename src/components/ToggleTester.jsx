import React from 'react';
import useToggle from '../hooks/useToggle';

const ToggleTester = () => {
  const [pinkFlag, togglePinkFlag, toggleOnPF, toggleOffPF] = useToggle(false)
  const [bigFlag, toggleBigFlag, toggleOnBF, toggleOffBF] = useToggle(false)
  const [dashedFlag, toggleDashedFlag, toggleOnDF, toggleOffDF] = useToggle(false)
  const [smallFlag, toggleSmallFlag, toggleOnSF, toggleOffSF] = useToggle(false)
  const [hauntedFlag, toggleHauntedFlag, toggleOnHF, toggleOffHF] = useToggle(false)

  console.log('pinkFlag: ', pinkFlag);

  return (
    <div style={styles.container}>
      <div className="componentPicker">
        <span
          onClick={togglePinkFlag}
          style={pinkFlag ? styles.highlightSpan : {}}
        >
          <input type="checkbox" value={pinkFlag} />
          PinkFlag
        </span>
        <span
          onClick={toggleBigFlag}
          style={bigFlag ? styles.highlightSpan : {}}
        >
          <input type="checkbox" value={bigFlag} />
          BigFlag
        </span>
        <span
          onClick={toggleDashedFlag}
          style={dashedFlag ? styles.highlightSpan : {}}
        >
          <input type="checkbox" value={dashedFlag} />
          DashedFlag
        </span>
        <span
          onClick={toggleSmallFlag}
          style={smallFlag ? styles.highlightSpan : {}}
        >
          <input type="checkbox" value={smallFlag} />
          SmallFlag
        </span>
        <span
          onClick={toggleHauntedFlag}
          style={hauntedFlag ? styles.highlightSpan : {}}
        >
          <input type="checkbox" value={hauntedFlag} />
          HauntedFlag
        </span>
      </div>
      <div style={buildCustomStyle(pinkFlag, bigFlag, dashedFlag, smallFlag)}>
        {hauntedFlag && <span>👻👻👻👻👻</span>}
        <div>AWESOME STRING!!!</div>
        {hauntedFlag && <span>👻👻👻👻👻</span>}
      </div>
    </div>
  );
};

const buildCustomStyle = (pinkFlag, bigFlag, dashedFlag, smallFlag) => {
  let style = {};
  if (pinkFlag) style = { ...style, backgroundColor: 'pink' };
  if (bigFlag) style = { ...style, fontSize: 48 };
  if (dashedFlag) style = { ...style, borderStyle: 'dashed', borderWidth: '2px', borderColor: 'white' };
  if (smallFlag) style = { ...style, fontSize: 14 };
  return style;
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

export { ToggleTester };
