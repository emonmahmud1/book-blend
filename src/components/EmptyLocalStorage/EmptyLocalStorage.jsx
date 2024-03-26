
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
const EmptyLocalStorage = ({name}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center ">

            <p className="text-4xl text-center text-yellow-500 mb-5">Your {name} is Empty Back To Home Page</p>
            <Link to="/">
            <button className="btn btn-outline btn-warning font-bold text-xl">Back To Home</button>
            </Link>
            
            </div>
        </div>
    );
};
EmptyLocalStorage.propTypes = {
    name: PropTypes.string,
}

export default EmptyLocalStorage;