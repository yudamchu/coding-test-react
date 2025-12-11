import React from 'react';
import styles from '../../components/userProfileComponents/UserInfo.module.css'
import type { User } from '../UserProfile';


type UserProps = {
    user: User
}


function UserInfo({user}: UserProps) {
    return (
        <section className={styles.userInfoSection}>
            <h1 className={styles.name}>{user.name}</h1>
            <p className={styles.bio}>{user.bio}</p>
        </section>
    );
}

export default UserInfo;