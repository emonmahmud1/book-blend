import { getWishBooksList } from "../../utility/storeReadDataLocalStorage";
import ReadBook from './../ReadBooks/ReadBook';
import EmptyLocalStorage from './../EmptyLocalStorage/EmptyLocalStorage';

const WishListBooks = () => {
    const WishListBooks = getWishBooksList();

    if(WishListBooks.length ==0){
        const name= "WishList";
        return <EmptyLocalStorage name={name}></EmptyLocalStorage>
    }
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