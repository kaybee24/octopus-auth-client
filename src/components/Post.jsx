import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article>
            <Link to={`/post/${post.id}`}>
                <p className='my-3'>
                    {post.createdBy}<br />
                    {post.createdAt}<br />
                </p>
            </Link>
            {/* helpful for later to go to a post or event detail page */}
            <p>{
                (post.text).length <= 150
                    ? post.text
                    : `${(post.text).slice(0, 150)}...`
            }</p>
        </article>
    )
}

export default Post