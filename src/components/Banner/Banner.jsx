import { NavLink } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-2xl">
      <div className="lg:gap-28 hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="lg:w-1/2">
          <img
            src="./images/bannerimg.png"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold  playfair ">
            Books to freshen up your bookshelf
          </h1>
          <div className="mt-8">
            <NavLink to="/listedboot">

          <button className="btn text-white work-sans bg-[#23BE0A] border-none">View The List</button>
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
