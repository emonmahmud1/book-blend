export const storeReadData = (book) => {
  const getData = JSON.parse(localStorage.getItem("readData")) || [];
  const checkData = getData.find((data) => data.bookId == book.bookId);
  if (!checkData) {
    getData.push(book);
    localStorage.setItem("readData", JSON.stringify(getData));
  } else {
    alert("already read");
  }
};

export const storeWishList = (book) => {
  const getData = JSON.parse(localStorage.getItem("wishList")) || [];
  const checkData = getData.find((data) => data.bookId == book.bookId);
  console.log(book);
  if (!checkData) {
    getData.push(book);
    localStorage.setItem("wishList", JSON.stringify(getData));
  } else {
    alert("already wishlist");
  }
};
