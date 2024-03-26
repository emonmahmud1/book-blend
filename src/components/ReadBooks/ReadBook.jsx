import PropTypes from "prop-types";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const ReadBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex flex-col lg:flex-row w-full card-side bg-base-100 shadow-md">
      <figure className="px-12 py-6 bg-base-200 m-5 rounded-xl">
        <img className="h-40 w-32" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold playfair text-[#131313]">
          {bookName}
        </h2>
        <p className="text-[#131313cc] font-medium">
          {" "}
          <span>By: </span>
          {author}
        </p>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
          <div className="flex flex-col lg:flex-row gap-3 mb-4">
            <p className="font-bold">Tags</p>
            {tags &&
              tags.map((tag, idx) => (
                <p
                  className="bg-[#23be0a0d] rounded-lg lg:p-2 text-[#23BE0A] work-sans text-sm"
                  key={idx}
                >
                  # {tag}
                </p>
              ))}
          </div>
          <div>
            <p className="flex items-center gap-2 text-[#131313cc] font-medium">
            <IoLocationOutline className="text-xl" /> Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex">
   
   
            <p className="flex gap-2 text-[#13131399] work-sans"><IoPeopleOutline className="text-xl"/> Publisher: {publisher}</p>
            <p className="flex items-center gap-2 text-[#13131399] work-sans"><BsFillJournalBookmarkFill className="text-xl" /> Page:  {totalPages}</p>
        </div>
    

        <hr  className="my-4"/>
        <div className="work-sans lg:w-9/12 flex flex-col lg:flex-row justify-start gap-4 text-center">
            <p className="bg-[#328eff26] py-2 px-5 rounded-3xl text-[#328EFF] ">Category: {category}</p>
            <p className="bg-[#ffac3326] py-2 px-5 rounded-3xl text-[#FFAC33] ">Rating: {rating}</p>
            <button className="bg-[#23BE0A] btn text-white rounded-3xl text-lg font-medium"> View Details</button>
            
            
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  book: PropTypes.object,
};

export default ReadBook;
