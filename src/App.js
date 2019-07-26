import React, { useState } from 'react';
import {
  ToggleTester,
  Home,
  StateTester,
  EffectTester,
  MemoTester,
  ReducerTester,
} from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  const [component, setComponent] = useState('Home');

  const componentPicker = (key) => {
    switch (key) {
      case 'Home': return <Home />;
      case 'StateTester': return <StateTester />;
      case 'EffectTester': return <EffectTester />;
      case 'MemoTester': return <MemoTester />;
      case 'ReducerTester': return <ReducerTester />;
      case 'CustomTester': return <ToggleTester />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <span onClick={() => setComponent('Home')}>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </span>

        <div className="componentPicker">
          <span
            onClick={() => setComponent('StateTester')}
            style={component === 'StateTester' ? styles.highlightSpan : {}}
          >
            State Hook
          </span>
          <span
            onClick={() => setComponent('EffectTester')}
            style={component === 'EffectTester' ? styles.highlightSpan : {}}
          >
            Effect Hook
          </span>
          <span
            onClick={() => setComponent('MemoTester')}
            style={component === 'MemoTester' ? styles.highlightSpan : {}}
          >
            Memo Hook
          </span>
          <span
            onClick={() => setComponent('ReducerTester')}
            style={component === 'ReducerTester' ? styles.highlightSpan : {}}
          >
            Reducer Hook
          </span>
          <span
            onClick={() => setComponent('CustomTester')}
            style={component === 'CustomTester' ? styles.highlightSpan : {}}
          >
            Custom Hook
          </span>
        </div>
        {componentPicker(component)}
      </header>
    </div>
  );
}

const styles = {
  highlightSpan: {
    color: 'pink',
  },
};

export default App;
