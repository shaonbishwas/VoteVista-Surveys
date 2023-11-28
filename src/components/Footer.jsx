import { BsFacebook, BsAndroid2 } from "react-icons/bs";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillApple,
} from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#fff1d8] text-black py-20 px-16 flex flex-col gap-14 ">
      <div className="md:max-w-[1400px] mx-auto w-full">
        <div className="grid gap-10 lg:gap-0 md:grid-cols-3 lg:grid-cols-4 my-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold">
              Vote<span className="text-[#ff5100] text-6xl">V</span>ista
            </h1>
            <p className="font-semibold text-gray-400">
              We aim to gather consumers <br /> feedback on various products.
            </p>
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/qnxLZLF/21104.png"
                  alt=""
                  className=" h-10  bg-white rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold  text-[#ff5100]">
                  Shaon Bishwas
                </h1>
                <p className="font-semibold text-gray-400">Owner</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-5 text-[#ff5100]">Company</h1>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                About Us
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Pricing & Plans
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Privacy Police
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Terms & Conditions
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Contact Us
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-5 text-[#ff5100]">
              Our Services
            </h1>
            <div className="space-y-3">
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100] ">
                <LiaGreaterThanSolid className="text-[#ff5100]" /> Pricing
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Teams
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Education
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Refer A Friend
              </p>
              <p className="flex items-center gap-2 font-semibold cursor-pointer hover:text-[#ff5100]">
                <LiaGreaterThanSolid className="text-[#ff5100]" />
                Updates
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-5 text-[#ff5100]">
              Contact Info
            </h1>
            <div className="mb-2">
              <h1 className="font-semibold text-xl text-[#ff5100] mb-2">
                Location
              </h1>
              <p>3430Station Road</p>
              <p>Brahmanbaria,Bangladesh</p>
            </div>
            <div>
              <h1 className="font-semibold text-xl text-[#ff5100] mb-2">
                Email
              </h1>
              <p>shaonbishwas01@gmail.com</p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <IoCallOutline className="bg-[#ff5100] text-white text-5xl rounded-full p-2" />
              <div>
                <p className="font-semibold text-xl text-[#ff5100] mb-2">
                  Call Us Now
                </p>
                <p>+8801407123601</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-5 md:gap-0 flex-col md:flex-row">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2 lg:gap-5 ">
              <h1>Follow Us</h1>
              <div className="flex justify-between items-center gap-3">
                <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                  <AiFillLinkedin></AiFillLinkedin>
                </div>
                <div className=" p-4 rounded-full hover:bg-white hover:text-black border border-white flex items-center ">
                  <SiIndeed></SiIndeed>
                </div>
                <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                  <BsFacebook></BsFacebook>
                </div>
                <div className=" p-4 rounded-full hover:bg-pink-700  border border-pink-600 flex items-center ">
                  <AiFillInstagram></AiFillInstagram>
                </div>

                <div className=" p-4 rounded-full hover:bg-sky-400 hover:text-black border border-sky-500 flex items-center ">
                  <AiFillTwitterCircle></AiFillTwitterCircle>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 flex-col md:flex-row">
              <h1>Mobile App</h1>
              <div className="flex justify-center items-center gap-2">
                <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                  <AiFillApple></AiFillApple>
                </div>
                <div className=" p-4 rounded-full hover:bg-white hover:text-black border border-white flex items-center ">
                  <BsAndroid2></BsAndroid2>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5 border border-black" />
          <div className="flex justify-around flex-col lg:flex-row gap-5 ">
            <div className="text-center">
              <p>© 2023-2025 My Job Global Inc.</p>
            </div>
            <ul className="grid grid-cols-2  md:flex justify-evenly gap-4">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>CA Notice at Collection</li>
              <li>Cookie Settings</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
