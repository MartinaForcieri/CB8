import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${inputValue}`);
  };

  return (
    <div className={styles.Homepage}>
      <input type="text" />
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Book for<span className={styles.colorLetters}>all</span>
        </h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <i className={`bi bi-search ${styles.search}`}></i>
          <input
            className={styles.inputText}
            type="text"
            onChange={handleInputChange}
            value={inputValue}
          />
          <input className={styles.btn} type="submit" value="Click" />
        </form>
      </div>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
