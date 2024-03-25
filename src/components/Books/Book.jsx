import PropTypes from 'prop-types';
import { TiStarOutline } from "react-icons/ti";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <div className="card bg-base-100 shadow-xl border-2">
      <div className="bg-base-200 mt-5 mx-5 rounded-2xl">
        <figure className="p-8  ">
          <img src={image} alt="Shoes" className="rounded-xl h-40 " />
        </figure>
      </div>
      <div className="card-body">
       
            <div className="flex gap-3 mb-4">
                {
                    tags.map((tag,idx) =>(
                        <p className="bg-[#23be0a0d] rounded-lg p-2 text-[#23BE0A] work-sans text-sm" key={idx}>{tag}</p>
                    ))
                }
            </div>
       
        <h2 className="card-title playfair text-2xl font-bold">{bookName}</h2>
        <p className='text-[#131313cc] work-sans font-medium'>By: {author}</p>
        <div className='my-2'>
            <hr />

        </div>

        <div className='flex justify-between font-medium work-sans'>
            <p>{category}</p>
            <p className=' text-end flex justify-end gap-2 items-center'>{rating} <TiStarOutline className='text-2xl' /></p>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
    book: PropTypes.object
}
export default Book;
