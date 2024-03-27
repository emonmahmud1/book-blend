import ReadBook from "./../ReadBooks/ReadBook";
import EmptyLocalStorage from "./../EmptyLocalStorage/EmptyLocalStorage";
import { useContext } from 'react';
import { WishListContext } from "../../Pages/ListedBook/ListedBook";


const WishListBooks = () => {

        const wishBooks = useContext(WishListContext)

 

  if (wishBooks.length == 0) {
    const name = "WishList";
    return <EmptyLocalStorage name={name}></EmptyLocalStorage>;
  }
  return (
    <div className="grid grid-cols-1 gap-5">
      
      {wishBooks.map((book) => (
        <ReadBook key={book.bookId} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default WishListBooks;
