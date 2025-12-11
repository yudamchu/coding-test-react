import React from 'react';
import styles from '../../components/userProfileComponents/Post.module.css';
import type { Post } from '../UserProfile';



type PostProps = {
    post: Post
}


function PostBox({post}: PostProps) {
    return (
        <div key={post.id} className={styles.postItem}>
            <img src={post.imageUrl} alt={post.caption} className={styles.postImage} />
        </div>
    );
}

export default PostBox;