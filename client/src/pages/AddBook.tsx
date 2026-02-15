import { useNavigate } from "react-router-dom";
import { createBook } from "../api/bookservecies";
import type { Book } from "../types/Book";
import BookForm from "../components/BookForm";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = async (book: Book) => {
    await createBook(book);
    navigate("/");
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>
      <div className="book-form-wrapper">
        <BookForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddBook;
