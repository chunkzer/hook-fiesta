import React from 'react';
import { daRules } from '../constants/Images';

const Home = () => (
  <div style={styles.container}>
    <div style={styles.imageContainer}>
      <img src={daRules} alt="rules" />
    </div>
    <div style={styles.rulesContainer}>
      <h3>Hook Rulez: </h3>
      <div>⬆️ Only Call Hooks at the Top Level ⬆️</div>
      <div>👁 Only Call Hooks from React Functions 👁</div>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  rulesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
};

export { Home };
