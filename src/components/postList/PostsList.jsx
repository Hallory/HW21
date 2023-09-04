import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../post/Post';
const PostsList = () => {
  const posts = useSelector(state => state.posts)
  return (
    <div>
      <h2 style={{color:'white'}}>Публікації</h2>
      {posts.map((post,index)=>(
        <Post key={index} post={post} index={index}/>
      ))}
    </div>
  );
};

export default PostsList;