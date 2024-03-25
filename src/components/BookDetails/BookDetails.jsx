import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("../bookdata.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((book) => book.bookId === id);
        setBook(foundBook);
      });
  }, [id]);

  const { bookId, bookName, author, image, rating, category, tags,review,totalPages,publisher,yearOfPublishing } = book;

  return (
    <div className="card lg:card-side bg-base-100 gap-9">
        <div className="bg-base-200 p-8 rounded-2xl">

      <figure>
        <img className="lg:h-[500px] h-96"
          src={image}
          alt="Album"
        />
      </figure>
        </div>
      <div className="">
        <h2 className=" text-4xl font-bold playfair mb-4">
          {bookName}
        </h2>
        <p className="text-[#131313cc] work-sans font-medium">
          <span>By: </span> {author}
        </p>
        <div className="my-5">
          <hr />
        </div>
        <p className="text-[#131313cc] work-sans font-medium text-xl">
          {category}
        </p>
        <div className="my-5">
          <hr />
        </div>
        <p>
          <span className="font-bold text-base work-sans">Review: </span>
          <span className="text-[#131313cc]">{review}</span>
        </p>
        <div className="flex gap-3 mb-4 mt-5 items-center">
            <p className="font-bold">Tags:</p>
            {tags && tags.map((tag, idx) => (
              <p
                className="bg-[#23be0a0d] rounded-lg p-2 text-[#23BE0A] work-sans text-sm"
                key={idx}
              >
                {tag}
              </p>
            ))}
          </div>

        <div className="my-5">
          <hr />
        </div>
        <div className="work-sans space-y-4">
          <div className=" flex justify-between">
            <p className="text-[#131313b3] font-medium mr-7">
              Number of Pages:
            </p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-[#131313b3] font-medium mr-7">Publisher:</p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-[#131313b3] font-medium mr-7">
              Year of Publishing:
            </p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className=" flex justify-between">
            <p className="text-[#131313b3] font-medium mr-7">Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>

        <div className="mt-9 space-x-6">
            <button className="btn btn-outline px-7 text-lg font-semibold">Read</button>
            <button className="btn bg-[#50B1C9] text-white font-semibold text-lg px-7">Wishlist</button>
        </div>
      </div>
      
        
    </div>
  );
};

export default BookDetails;
