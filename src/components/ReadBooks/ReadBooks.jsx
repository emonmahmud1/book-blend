import EmptyLocalStorage from "../EmptyLocalStorage/EmptyLocalStorage";
import ReadBook from "./ReadBook";
import { useContext } from "react";
import { ReadBooksContext } from './../../Pages/ListedBook/ListedBook';


const ReadBooks = () => {
    // const readBooks = getReadBooksList();
    // const readBooks = getReadBooksList();

    const readBook = useContext(ReadBooksContext)

    
    console.log("Books", readBook);

    if(readBook.length ==0){
        const name ="Read Books List"
        return <EmptyLocalStorage name={name} ></EmptyLocalStorage>
    }
    return (
        <div className="grid grid-cols-1 gap-5">
           {
            readBook.map(book =>(
                <ReadBook key={book.bookId} book={book}></ReadBook>
            ))
           }
        </div>
    );
};

export default ReadBooks;