import React from 'react';
import styles from './Friends.module.scss';
import Banner from '../../components/Banner';
import Leaderboard from '../../components/Leaderboard';
import { user, LeaderboardResponse, Profile } from '../../assets/APIdata';
import More from '../../components/More';

interface IState {
  userInformation?: LeaderboardResponse;
}

class Friends extends React.Component<IState> {

  public state: IState = {
    userInformation: user
  }

  getProfile = (user: Profile, key: number) => {
    return (
      <Leaderboard userInformation={user} key={key} index={key + 1} />
    );
  };

  render() {
    return (
      <section className={styles.friends}>
        <Banner />
        <div>{this.state.userInformation?.profiles.map(this.getProfile)}</div>
        <More />
      </section>
    );
  }
}

export default Friends;
