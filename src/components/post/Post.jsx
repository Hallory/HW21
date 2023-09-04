import React, { useState } from "react";
import module from "./Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import {addLike } from "../../store/actions/postsActions";
import Comment from "./comment/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { TelegramShareButton } from "react-share";
const Post = ({ post, index }) => {
const comments = useSelector((state) => state.posts[index].comments);
const dispatch = useDispatch();
const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
const [isLiked, setIsLiked] = useState(false)

const handleAddLike = ()=>{
  dispatch(addLike(index, isLiked))
  setIsLiked(!isLiked)
}
const handleAddComment = ()=>{
  setIsCommentModalOpen(!isCommentModalOpen)
}
const shareUrl = 'https://hallory.github.io/HW21/'; // Замените на URL вашего поста
  const title = 'HW21'; //

  return (
    
    <main>
      <Comment 
      setVisible={setIsCommentModalOpen}
      isOpen={isCommentModalOpen}
      postId={index} 
      post={post}
      >
        
      </Comment>
    <div className={module.post__container}>
      <div className={module.img__container}>
        <span className={module.img__span}>
          <img src={post.photo} alt="Icon" />
        </span>
      </div>
      <div className={module.content__data}>
        <div className={module.data}>
          <div className={module.author__data}>
            <span>
              {!post.author
                ?post.name
                :post.author
              }
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-check-circle"
              ></i>
            </span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{post.nickname}</span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{post.date}</span>
          </div>
        </div>
        <div className={module.content__text}>{post.content}</div>
        <div className={module.content__image}><img src={post.image} alt="" /></div>
        <div className={module.activity__content}>
     <span style={{paddingLeft:"5px"}}>
      <FontAwesomeIcon className={module.fontIcon} style={isLiked?{color:'red'}:''} onClick={handleAddLike} icon={faHeart}>
        </FontAwesomeIcon>{post.likes} </span>
        <FontAwesomeIcon className={module.fontIcon} onClick={handleAddComment} icon={faComment}>
  <span style={{ paddingLeft: "5px" }}>

    {comments.length}
  </span>
</FontAwesomeIcon>
<TelegramShareButton  url={shareUrl} title={title}><FontAwesomeIcon className={module.fontIcon} icon={faShare}><span style={{paddingLeft:"5px"}}>48</span></FontAwesomeIcon></TelegramShareButton>
        <FontAwesomeIcon  className={module.fontIcon} icon={faDownload}><span style={{paddingLeft:"5px"}}>Завантажити</span></FontAwesomeIcon>
        
        </div>
      </div>
    </div>
    
    
    </main>
  );
};

export default Post;