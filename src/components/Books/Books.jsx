import { useEffect, useState } from "react";
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("bookdata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="mt-24 playfair text-5xl font-bold text-center mb-8">Books</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {
            books.map(book => (
                <Book key={book.bookId} book={book}></Book>
            ))
        }
      </div>
    </div>
  );
};

export default Books;
