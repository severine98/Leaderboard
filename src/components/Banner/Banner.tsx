import React from 'react';
import styles from './Banner.module.scss';

const Banner: React.FC<{}> = props => (
  <section className={styles.banner}>
    <h1>Compete with your friends this week!</h1>
    <div>
      <p>
        Resets in: <span>4 days</span>
      </p>
    </div>
  </section>
)

export default Banner;
