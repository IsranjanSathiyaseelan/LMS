import axios from "axios";
import type { Book } from "../types/Book";

const API_URL = "https://localhost:7087/api/books";

export const getBooks = async () => {
  return await axios.get<Book[]>(API_URL);
};

export const getBookById = async (id: number) => {
  return await axios.get<Book>(`${API_URL}/${id}`);
};

export const createBook = async (book: Book) => {
  return await axios.post(API_URL, book);
};

export const updateBook = async (id: number, book: Book) => {
  return await axios.put(`${API_URL}/${id}`, book);
};

export const deleteBook = async (id: number) => {
  return await axios.delete(`${API_URL}/${id}`);
};