import { ADD_COMMENT, ADD_LIKE, ADD_POSTS } from "../actionTypes/actionTypes"


export const addPost = (post)=>{
    return{
        type:ADD_POSTS,
        post
    }
}

export const addLike =(index, isLiked)=>{
    return{
        type:ADD_LIKE,
        index,
        isLiked
    }
}

export const addComment = (index, commentText) => {
    return {
      type: ADD_COMMENT,
      index,
      commentText, 
    };
  };

export const removePost = (index)=>{
    return {
        type:'REMOVE_POST',
        index
    }
}