import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import './contactus.css'
const ContactUs = () => {
  return (
    <div className=" flex w-4/5 justify-evenly mx-auto items-center min-h-screen lg:flex-row flex-col lg:pt-0 pt-20 text-black">
      <div>
        <h1 id="h1" className=" text-5xl lg:text-6xl font-bold mb-4">
          GET IN TOUCH
        </h1>
        <p className="text-3xl font-bold text-black mb-10">
          Drop us a message for <br /> your future survey
        </p>
        <p className="flex items-center gap-1 my-1">
          <AiFillInstagram className="text-[#ff5100] text-2xl"></AiFillInstagram>{" "}
          <span>ig_VoteVista</span>
        </p>
        <p className="flex items-center gap-1 my-1">
          <AiFillYoutube className="text-[#ff5100] text-2xl"></AiFillYoutube>
          <span>VoteVista Surveys</span>
        </p>
        <p className="flex items-center gap-1 my-1">
          <FaDiscord className="text-[#ff5100] text-2xl"></FaDiscord>{" "}
          <span>Survey with VoteVista</span>
        </p>
        <p className="flex items-center gap-1 my-1">
          <AiFillLinkedin className="text-[#ff5100] text-2xl"></AiFillLinkedin>{" "}
          <span>VoteVista</span>
        </p>
      </div>
      <div className="my-10 lg:my-0 flex flex-col gap-2 lg:w-1/2 w-full">
        <input
          className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
          type="email"
          name=""
          placeholder="Email"
          id=""
        />
        <input
          className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
          type="number"
          name=""
          placeholder="Phone Number"
          id=""
        />
        <textarea
          className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto h-32 bg-transparent"
          name=""
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="Submit"
          id="submit"
          className="mt-5 bg-black text-black px-10 py-3 rounded-full hover:border-blue-700 hover:border  mx-auto"
        />
      </div>
    </div>
  );
};

export default ContactUs;
