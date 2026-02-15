import type { Book } from "../types/Book";
import { useNavigate } from "react-router-dom";
import "./BookItem.css";

interface Props {
  book: Book;
  onDelete: (id: number) => void;
}

const BookItem = ({ book, onDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="book-item-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author"><strong>Author:</strong> {book.author}</p>
      <p className="book-description">{book.description}</p>

      <div className="book-item-buttons">
        <button
          className="update-btn"
          onClick={() => navigate(`/edit/${book.id}`)}
        >
          Update
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(book.id!)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
