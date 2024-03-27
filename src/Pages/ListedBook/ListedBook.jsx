import { Link } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { createContext } from "react";
import {
  getReadBooksList,
  getWishBooksList,
} from "../../utility/storeReadDataLocalStorage";

export const ReadBooksContext = createContext();
export const WishListContext = createContext();

const ListedBook = () => {
  const readBooksLocalStorage = getReadBooksList();

  const [readbooks, setReadBooks] = useState(readBooksLocalStorage);

  const wishBooksLocalStorage = getWishBooksList();
  const [wishlistBooks, setWishListBooks] = useState(wishBooksLocalStorage);

  const sortByRatingBtn = () => {
    const sortedReadBooks = [...readbooks].sort((a, b) => b.rating - a.rating);
    setReadBooks(sortedReadBooks);

    const sortedWishBooks = [...wishlistBooks].sort(
      (a, b) => b.rating - a.rating
    );
    setWishListBooks(sortedWishBooks);
  };
  const sortByYearBtn = () => {
    const sortedReadBooks = [...readbooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setReadBooks(sortedReadBooks);

    const sortedWishBooks = [...wishlistBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setWishListBooks(sortedWishBooks);
  };
  const sortByPages = () => {
    const sortedReadBooks = [...readbooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadBooks(sortedReadBooks);

    const sortedWishBooks = [...wishlistBooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setWishListBooks(sortedWishBooks);
  };

  // console.log("books",books);
  // console.log(books);

  const [tabReadClick, setTabReadClick] = useState(true);
  const [tabWishClick, setTabWishClick] = useState(false);
  const tabReadOnClick = () => {
    setTabReadClick(true);
    setTabWishClick(false);
  };
  const tabWishOnClick = () => {
    setTabWishClick(true);
    setTabReadClick(false);
  };

  const [sortbtn, setSortbtn] = useState(true);
  const showHideSortBtn = () => {

    setSortbtn(!sortbtn);

  };

  return (
    <div>
      <h2 className="text-2xl font-bold work-sans text-center bg-base-200 py-7 rounded-xl">
        Books
      </h2>

      {/* <button onClick={sortBtn} className="btn "> sort by rating</button> */}

      <div onClick={showHideSortBtn} className="my-6 text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className={`${sortbtn? "hidden dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 " : "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"} `}
          >
            <li>
              <Link onClick={sortByRatingBtn}>Rating</Link>
            </li>
            <li>
              <Link onClick={sortByYearBtn}>Publish Date</Link>
            </li>
            <li>
              <Link onClick={sortByPages}>Number of Pages</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <div role="tablist" className="tabs tabs-lifted text-xl font-bold">
          <Link
            to={"/listedbook"}
            onClick={tabReadOnClick}
            role="tab"
            className={`tab ${tabReadClick ? "tab-active" : "tab"}`}
          >
            Read Books
          </Link>
          <Link
            to={"wishlist"}
            onClick={tabWishOnClick}
            role="tab"
            className={`tab ${tabWishClick ? "tab-active" : "tab"}`}
          >
            Wish List
          </Link>
        </div>

        <div className="mt-20">
          <ReadBooksContext.Provider value={readbooks}>
            <WishListContext.Provider value={wishlistBooks}>
              <Outlet></Outlet>
            </WishListContext.Provider>
          </ReadBooksContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
