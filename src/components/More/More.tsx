import React from 'react';
import styles from './More.module.scss';

const Banner: React.FC<{}> = props => (
  <section className={styles.more}>
    <p>9 OTHERS • <span className={styles.show}>SHOW</span> </p>
  </section>
)

export default Banner;
