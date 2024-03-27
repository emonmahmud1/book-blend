const AboutUs = () => {
  return (
    <div className=" ">
      <div
        className="hero h-[300px] mb-5 rounded-2xl "
        style={{ backgroundImage: "url(./images/aboutus.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-md mb-7">
        <div className="card-body">
          <h2 className="card-title text-3xl playfair font-bold">
            Introduction
          </h2>
          <p className="text-lg work-sans mb-3">
            Welcome to BookBlend, where the love for books and the joy of
            reading converge into a vibrant community of literary enthusiasts.
            In this blog post, we invite you to delve into the story behind
            BookBlend and learn more about the passion that drives us to share
            our thoughts on books, connect with fellow readers, and cultivate a
            love for literature.
          </p>

          <h2 className="card-title text-3xl playfair font-bold">
            Our Journey
          </h2>
          <p className="text-lg work-sans mb-3">
            At BookBlend, our journey began with a simple yet profound
            realization: the power of books to inspire, educate, and transform
            lives. As avid readers ourselves, we recognized the need for a
            platform where book lovers could come together to discover new
            reads, engage in thoughtful discussions, and celebrate the magic of
            storytelling.
          </p>

          <h2 className="card-title text-3xl playfair font-bold">
            Our Mission
          </h2>
          <p className="text-lg work-sans mb-3">
            Our mission at BookBlend is to create a welcoming space where
            readers of all backgrounds and interests can find their next
            literary adventure. Whether you are searching for gripping thrillers,
            thought-provoking classics, or heartwarming romances, we are here to
            guide you on your journey through the vast landscape of literature.
          </p>

          <div className="card-actions justify-end text-center items-center">
            <div>
          <h2 className="card-title text-xl playfair font-thin text-gray-400 underline">
                Emon Mahmud
            </h2>
            <p className="italic">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
