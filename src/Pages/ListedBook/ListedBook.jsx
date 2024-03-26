import { Link} from "react-router-dom";
import { useState } from 'react';
import { Outlet } from "react-router-dom";

const ListedBook = () => {

    const [tabReadClick, setTabReadClick] =useState(true);
    const [tabWishClick, setTabWishClick] =useState(false);
    const tabReadOnClick = ()=> {
        setTabReadClick(true);
        setTabWishClick(false);
    }
    const tabWishOnClick = ()=> {
        setTabWishClick(true);
        setTabReadClick(false);
    }
  return (
    <div>
      <h2 className="text-2xl font-bold work-sans text-center bg-base-200 py-7 rounded-xl">
        Books
      </h2>
      <div className="mt-20">
        <div role="tablist" className="tabs tabs-lifted text-xl font-bold">
         
          <Link to={"readbooks"} onClick={tabReadOnClick} role="tab" className={`tab ${tabReadClick? 'tab-active': 'tab'}`}>
            Read Books
          </Link>
          <Link to={"wishlist"} onClick={tabWishOnClick} role="tab" className={`tab ${tabWishClick? 'tab-active': 'tab'}`}>
            Wish List
          </Link>
          </div>

          <div className="mt-20">

          <Outlet></Outlet>
          </div>
         
        </div>
      
    </div>
  );
};

export default ListedBook;
