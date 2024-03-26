
import { toast } from 'react-toastify';

export const storeReadData = (book) => {
  const getData = JSON.parse(localStorage.getItem("readData")) || [];
  const checkData = getData.find((data) => data.bookId == book.bookId);
  if (!checkData) {
    getData.push(book);
    localStorage.setItem("readData", JSON.stringify(getData));
    toast.success("Successfully Added To Reading list")
  } else {
    toast.error("Already Read this Book");
  }
};

export const storeWishList = (book) => {
  const getData = JSON.parse(localStorage.getItem("wishList")) || [];
  const checkData = getData.find((data) => data.bookId == book.bookId);
  const readBooks = checkReadBook();
  const alreadyReadBook = readBooks.find((readbook) => readbook == book.bookId); 
//   console.log(book, readBooks);
if(alreadyReadBook){
    // alert('already Read this Book you can not add in wishlist');
 toast.warn("already Read this Book you can not add in wishlist")


}
 else if (!checkData && !alreadyReadBook) {
    getData.push(book);
    localStorage.setItem("wishList", JSON.stringify(getData));
    toast.success("Successfully added to Wishlist")
 
  } else {
    toast.info("Already Whitlisted")
  
  }
};

const checkReadBook =() => {
    const getBook= JSON.parse(localStorage.getItem("readData")) || [];
    const bookarr = getBook.map(book=> book.bookId);
   return bookarr;

};

export const getReadBooksList =() => {
    
    const getBooks= JSON.parse(localStorage.getItem("readData")) || [];
    return getBooks;

};
export const getWishBooksList =() => {
    
    const getBooks= JSON.parse(localStorage.getItem("wishList")) || [];
    return getBooks;

};
