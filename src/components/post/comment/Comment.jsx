import React, { useState } from "react";
import styles from "./Comment.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addComment } from "../../../store/actions/postsActions";
const Comment = ({ isOpen, setVisible, postId, handleAddComment, post }) => {
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
      return; // Пустые комментарии не добавляем
    }
    dispatch(addComment(postId, newCommentText));
    setNewCommentText(""); // Очищаем поле ввода после отправки комментария
  };

  return (
    <div className={rootClasses.join(" ")}>
      <div className={styles.myModalContent}>
        <button className={styles.close} onClick={handleCloseModal}>
          &times;
        </button>
        <h2>Комментарии</h2>
        <ul>
        {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <div>
          <textarea
            placeholder="Напишите комментарий"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          ></textarea>
          <button onClick={handleCommentSubmit}>Добавить комментарий</button>
        </div>
      </div>
          
    </div>
  );
};

export default Comment;
