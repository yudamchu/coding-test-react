import React from 'react';
import styles from '../../components/userProfileComponents/UserState.module.css';
import type { UserStats } from '../UserProfile';


type StateProps = {
    stats: UserStats
}


function UserState({stats}: StateProps) {
    return (
      <section className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{stats.posts}</span>
          <span className={styles.statLabel}>게시물</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{stats.followers}</span>
          <span className={styles.statLabel}>팔로워</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{stats.following}</span>
          <span className={styles.statLabel}>팔로잉</span>
        </div>
      </section>
    );
}

export default UserState;