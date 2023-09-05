
import React, { useState } from "react";
import styles from "./PostForm.module.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/actions/postsActions";
import { authors } from "./autors";
const PostsForm = () => {
  const timestamp = Date.now();
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${day}.${month < 10 ? "0" : ""}${month}.${year}`;
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    authorId: authors[0].id,
    name: "",
    nickname: `@${authors[0].name}`,
    content: "",
    photo: authors[0].photo,
    image: imageUrl,
    likes: 0,
    comments: [],
    date: formattedDate,
  });
  const handleChangePost = (event) => {
    const { name, value } = event.target;

    if (name === "content") {
      setNewPost((prevPost) => ({
        ...prevPost,
        [name]: value,
      }));
    }
    else if (name === "image") {
      setImageUrl(value);
     } else if (name === "authorId") {
      const selectedAuthor = authors.find(
        (author) => author.id === parseInt(value)
      );

      setNewPost((prevPost) => ({
        ...prevPost,
        [name]: value,
        nickname: `@${selectedAuthor.name}`,
        authorId: selectedAuthor.id,
        photo: selectedAuthor.photo,
      }));
    } 
    
  };

  const handleAddPost = (event) => {
    event.preventDefault();
    const selectedAuthor = authors.find(
      (author) => author.id === newPost.authorId
    );

    if (selectedAuthor) {
      const postWithAuthor = {
        ...newPost,
        authorId: selectedAuthor.id,
        author: selectedAuthor.name,
        image: imageUrl,
      };

      console.log(imageUrl)
      dispatch(addPost(postWithAuthor));
      setNewPost({
        content: "",
        date: formattedDate,
        image: "",
      });
      setImageUrl("")
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Додати нову публікацію</h2>
      <form className={styles.form}>
        <select
          name="authorId"
          value={newPost.authorId}
          onChange={handleChangePost}
          className={styles.input}
        >
          {authors.map((author) => (
            <option
              style={{ background: "gray" }}
              key={author.id}
              value={author.id}
            >
              {author.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="image"
          value={imageUrl}
          onChange={handleChangePost}
          className={styles.input}
          placeholder="Посилання на зображення"
        />
        <div className={styles.imagePreview}>
          {newPost.image && <img src={newPost.image} alt="Зображення" />}
        </div>
        <textarea
          style={{ maxWidth: "380px" }}
          className={styles.textarea}
          name="content"
          value={newPost.content}
          onChange={handleChangePost}
          placeholder="зміст публікації"
        />

        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddPost}
        >
          Додади публікацію
        </button>
      </form>
    </div>
  );
};

export default PostsForm;
