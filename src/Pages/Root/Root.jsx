import { Outlet } from "react-router-dom";
import NavBar from './../../components/NavBar/NavBar';
const Root = () => {
    return (
        <div className="lg:w-11/12 mx-auto space-y-11 px-3">
            
            <NavBar></NavBar>
            <Outlet></Outlet>   
        </div>
    );
};

export default Root;