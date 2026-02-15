import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import { getBooks, deleteBook } from "../api/bookservecies";
import BookItem from "./BookItem";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure?")) {
      await deleteBook(id);
      loadBooks();
    }
  };

  return (
    <div className="book-list-container">
      <h2 className="book-list-heading">Book List</h2>
      <div className="book-items-wrapper">
        {books.length === 0 ? (
          <p className="no-books">No books available.</p>
        ) : (
          books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BookList;
