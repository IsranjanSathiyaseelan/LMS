import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="button-wrapper">
        <button
          className="add-book-btn"
          onClick={() => navigate("/add")}
        >
          Add New Book
        </button>
      </div>

      <div className="book-list">
        <BookList />
      </div>
    </div>
  );
};

export default Home;
