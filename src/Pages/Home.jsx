import { useQuery } from "@tanstack/react-query";
import Faq from "../components/Faq";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["featured surveys"],
    queryFn: async () => {
      const result = await axios.get("http://localhost:5000/surveys");
      return result.data;
    },
  });
  console.log(data);
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* hero section */}
      <div className="flex my-20 ">
        <div className="w-[60%] space-y-5 lg:pt-10">
          <h1 className="text-5xl font-bold w-[90%]">
            Sharing Your Opinion By voting surveys and polls Around The World
          </h1>
          <p className="text-xl font-semibold text-gray-400 w-[90%]">
            Share your valuable insights with the world by voting surveys and
            polls you know and love.
          </p>
          <button className="bg-[#ff5100] text-white py-2 px-8 rounded-full drop-shadow-lg hover:bg-white transition duration-200 hover:text-black border border-[#ff5100]">
            Explore More
          </button>
        </div>
        <div className="w-[40%] flex items-center justify-center ">
          <img
            src="https://i.ibb.co/HpyxH9n/Banner-The-voice.png"
            alt=""
            className="rounded-badge"
          />
        </div>
      </div>

      {/* Featured Surveys */}
      <div className="my-20">
        <h1 className="text-4xl font-semibold my-8 ml-10">Featured Surveys</h1>
        <div className="grid grid-cols-3 gap-5">
          {data?.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="card w-96 bg-base-100 shadow-xl image-full mx-auto h-64"
            >
              <figure>
                <img
                  src={item.banner}
                  alt="Shoes"
                  className="opacity-30 w-full"
                />
              </figure>
              <div className="card-body  text-white bg-[#00000030] rounded-2xl">
                <h2 className="card-title text-3xl font-bold text-gray-800 ">{item.title}</h2>
                <p className="text-lg font-semibold text-gray-800">{item.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/surveydetails/${item._id}`}>
                    <button className="bg-white py-2 px-4 text-[#ff5100] rounded-full hover:bg-transparent hover:border-2 hover:border-black shadow-lg">
                      Vote Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Surveys */}
      <div className="my-20">
        <h1 className="text-4xl font-semibold my-8 ml-10">Latest Surveys</h1>
        <div className="grid grid-cols-3 gap-5">
          {data?.slice(0, 6).map((item) => (
            <div
              key={item._id}
              className="card w-96 bg-base-100 shadow-xl image-full mx-auto h-64"
            >
              <figure>
                <img
                  src={item.banner}
                  alt="Shoes"
                  className="opacity-30 w-full"
                />
              </figure>
              <div className="card-body  text-white bg-[#00000030] rounded-2xl ">
                <h2 className="card-title text-3xl text-gray-800 font-bold">{item.title}</h2>
                <p className="text-lg font-semibold text-gray-800">{item.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/surveydetails/${item._id}`}>
                    <button className="bg-white py-2 px-4 text-[#ff5100] rounded-full hover:bg-transparent hover:border-2 hover:border-black shadow-lg">
                      Vote Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ.......... */}
      <Faq></Faq>
    </div>
  );
};

export default Home;
