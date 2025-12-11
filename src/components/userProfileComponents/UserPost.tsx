import React from 'react';
import styles from '../../components/userProfileComponents/UserPost.module.css';
import type { Post } from '../UserProfile';
import PostBox from './PostBox';



type PostProps = {
    posts: Post[]
}


function UserPost({posts}: PostProps) {
    return (
     <main className={styles.postsGrid}>
        {posts.map(post => (
           <PostBox post={post}/>
        ))}
      </main>
    );
}

export default UserPost;