import React from 'react';
import styles from './Leaderboard.module.scss';
import { Profile } from '../../assets/APIdata';

interface IProps {
  userInformation?: Profile;
  index?: number;
}

const Leaderboard: React.FC<IProps> = (props: IProps) => {
  const highlightCurrentUser = () => {
    return (props.userInformation?.isCurrentUser === true) ? styles.isCurrentUser : null;
  }

  return (
    <>
      <section className={`${styles.leaderboard} ${highlightCurrentUser()}`}>
        <p>
          <span className={styles.position}>{props.index}</span>{" "}
          {props.userInformation?.username}{" "}
          <span className={styles.xppoints}>{props.userInformation?.weeklyXP}XP</span>{" "}
        </p>
      </section>
    </>
  )
}

export default Leaderboard;
