import { useState, useEffect } from "react";
import type { Book } from "../types/Book";
import "./BookForm.css";

interface Props {
  initialData?: Book;
  onSubmit: (book: Book) => void;
}

const BookForm = ({ initialData, onSubmit }: Props) => {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    description: "",
  });

  // Load initial data if editing an existing book
  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={book.description}
        onChange={handleChange}
        rows={4}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
