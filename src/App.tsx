import * as React from 'react';
import styles from './App.module.scss';
import Friends from './containers/Friends';

class App extends React.Component {
  public render() {
    return (
      <section className={styles.app}>
      <Friends />
    </section>
    );
  }
}

export default App;
