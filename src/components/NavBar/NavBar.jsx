import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 work-sans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <NavLink to="/" 
         className={({ isActive }) =>
         isActive
           ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold text-lg"
           : " font-semibold text-lg "
       }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedboot"
        className={({ isActive }) =>
        isActive
        ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold text-lg"
        : " font-semibold text-lg "
      }
        >Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagestoread" 
        className={({ isActive }) =>
        isActive
        ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold text-lg"
        : " font-semibold text-lg "
      }
        >Pages to Read</NavLink>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Blend</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1 gap-8 work-sans">
      <li>
        <NavLink to="/" 
         className={({ isActive }) =>
         isActive
           ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold"
           : " font-semibold "
       }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedboot"
        className={({ isActive }) =>
        isActive
        ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold"
        : " font-semibold "
      }
        >Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pagestoread" 
        className={({ isActive }) =>
        isActive
        ? " border border-[#23BE0A] text-[#23BE0A] px-5 py-3 rounded-lg font-semibold"
        : " font-semibold "
      }
        >Pages to Read</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end gap-4 lg:flex hidden">
    <a className="btn bg-[#23BE0A] text-white text-lg font-semibold">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white text-lg font-semibold">Sign Up</a>
  </div>
</div>
    );
};

export default NavBar;