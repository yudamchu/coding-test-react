import React from 'react';
import styles from '../../components/userProfileComponents/ProfileHeader.module.css';
import type { User } from '../UserProfile';


type UserProps = {
    user: User
}

function ProfileHeader({user}: UserProps) {

    return (
      <header className={styles.profileHeader}>
        <div className={styles.avatarContainer}>
          <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className={styles.avatar} />
        </div>
        <div className={styles.userInfoContainer}>
          <h2 className={styles.username}>{user.username}</h2>
          <button className={styles.editProfileButton}>프로필 편집</button>
        </div>
      </header>  
    );
}

export default ProfileHeader;