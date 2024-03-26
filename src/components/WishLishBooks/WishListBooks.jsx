import { getWishBooksList } from "../../utility/storeReadDataLocalStorage";
import ReadBook from './../ReadBooks/ReadBook';

const WishListBooks = () => {
    const WishListBooks = getWishBooksList();
    return (
        <div className="grid grid-cols-1 gap-5">
           {
            WishListBooks.map(book =>(
                <ReadBook key={book.bookId} book={book}></ReadBook>
            ))
           }
        </div>
    );
};

export default WishListBooks;