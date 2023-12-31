import React, { useState } from "react";
import styles from "./Comment.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/actions/postsActions";
const Comment = ({ isOpen, setVisible, postId}) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.posts[postId].comments);
  const [newCommentText, setNewCommentText] = useState("");
  const rootClasses = [styles.myModal];
  if (isOpen) {
    rootClasses.push(styles.active);
  }

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleCommentSubmit = () => {
    if (newCommentText.trim() === "") {
      return; 
    }
    dispatch(addComment(postId, newCommentText));
    setNewCommentText("");
  };

  return (
    <div className={rootClasses.join(" ")} onClick={()=>setVisible(false)}>
      <div className={styles.myModalContent}onClick={(e)=>e.stopPropagation()}>
        <button className={styles.close} onClick={handleCloseModal}>
          &times;
        </button>
        <h2>Коментари</h2>
        <ul>
        {comments && comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div className={styles.form}>
          <textarea
            placeholder="Додайте свій коментар..."
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          ></textarea>
          <button onClick={handleCommentSubmit}>Додати коментар</button>
        </div>
      </div>
          
    </div>
  );
};

export default Comment;
