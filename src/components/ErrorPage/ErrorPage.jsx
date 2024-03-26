import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-lvh">
      <MdErrorOutline className=" text-5xl text-red-600 mb-6" />

      <p className=" mb-5 text-4xl font-semibold text-red-600">
       opps!!!! Page Not Found
      </p>
      <Link to="/">
        <button className="btn btn-outline items-center btn-error text-xl ">
          <IoMdArrowRoundBack />
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
