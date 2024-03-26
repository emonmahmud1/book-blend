import { getReadBooksList } from "../../utility/storeReadDataLocalStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const readBooks = getReadBooksList();
    return (
        <div className="grid grid-cols-1 gap-5">
           {
            readBooks.map(book =>(
                <ReadBook key={book.bookId} book={book}></ReadBook>
            ))
           }
        </div>
    );
};

export default ReadBooks;