import { BiMessageCheck } from "react-icons/bi";
const ContactUs = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex justify-center items-center">
      <div className="card lg:card-side bg-base-100 shadow-md">
        <figure className="lg:w-1/2 w-full ">
          <img className="rounded-3xl" src="./images/contactus.jpg" alt="Album" />
        </figure>
        <div className="divide-x-2 divider mx-3"></div>
        <div className="card-body">
          <div className="space-y-5">
            <label className="input input-bordered input-primary flex items-center gap-2 bg-gray-100 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Name" />
            </label>
            <label className="input input-bordered input-accent flex items-center gap-2 bg-gray-100 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
           

            <textarea rows="4" className="bg-gray-100 textarea resize-none w-full textarea-warning" placeholder="Your Messages"></textarea>
          </div>

          <div className="card-actions justify-center mt-5 ">
            <button className="btn bg-[#50B1C9] playfair text-white lg:w-1/2 w-full rounded-full border-none text-lg" onClick={()=>document.getElementById('my_modal_5').showModal()}>Send Message</button>
          </div>
        </div>
      </div>

      
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col items-center text-center">
    <h3 className="font-bold text-6xl text-lime-600"><BiMessageCheck /></h3>
    <p className="py-4 work-sans">Thank you for reaching out to us! We will get back to you as soon as possible.</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn btn-accent text-white rounded-xl ">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>

    
  );
};

export default ContactUs;
