import { getReadBooksList } from "../../utility/storeReadDataLocalStorage";
import EmptyLocalStorage from "../EmptyLocalStorage/EmptyLocalStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const readBooks = getReadBooksList();

    if(readBooks.length ==0){
        const name ="Read Books List"
        return <EmptyLocalStorage name={name} ></EmptyLocalStorage>
    }
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