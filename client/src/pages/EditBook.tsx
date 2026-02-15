import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBook } from "../api/bookservecies";
import type { Book } from "../types/Book";
import BookForm from "../components/BookForm";
import "./EditBook.css";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBookById(Number(id));
      setBook(response.data);
    };
    loadBook();
  }, [id]);

  const handleSubmit = async (updatedBook: Book) => {
    await updateBook(Number(id), updatedBook);
    navigate("/");
  };

  return (
    <div className="edit-book-container">
      <h2>Edit Book</h2>
      {book && (
        <div className="book-form-wrapper">
          <BookForm initialData={book} onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default EditBook;
