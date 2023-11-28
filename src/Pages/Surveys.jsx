import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";

const Surveys = () => {
  const axiosPublic = useAxiosPublic();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [vote, setVote] = useState("");
  const { data, refetch } = useQuery({
    queryKey: ["allsurveys"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        `/surveys?title=${title}&category=${category}&vote=${vote}`
      );
      return result.data;
    },
  });
  const { data:titles=[] } = useQuery({
    queryKey: ["titles"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        '/titles'
      );
      return result.data;
    },
  });
const filterButton = ()=>{
  refetch()
}
  return (
    <div className="max-w-[1400px] mx-auto  my-10 space-y-10">
      <div className="flex gap-5 items-center">
        <h1 className="mr-5 text-xl font-semibold">Filter :</h1>
        <div className="flex items-center gap-2">
          Title: 
          <select
            name=""
            id=""
            className="border-2 py-1 px-2"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // refetch();
            }}
          >
            {titles?.map((d) => (
              <option key={d._id}>{d.title}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2"> Category: 
          <select
            name="category"
            id=""
            className="border-2 py-1 px-2"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              // refetch();
            }}
          >
            <option value="">all</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Gaming">Gaming</option>
            <option value="Hobbies">Hobbies</option>
          </select>
        </div>
        <div className="flex items-center gap-2"> Vote:
          <select
            name=""
            id=""
            className="border-2 py-1 px-2"
            value={vote}
            onChange={(e) => {
              setVote(e.target.value);
              // refetch();
            }}
          >
            <option value="">All</option>
            <option value="dsc">Most voted</option>
            <option value="asc">Less voted</option>
          </select>
        </div>
        <button className="border-2 border-black rounded-full py-1 px-2 hover:shadow-lg" onClick={filterButton}>Apply Filter</button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data?.map((item) => (
          <div key={item._id}>
            <div className="border-2 rounded-sm p-5 space-y-2 h-full">
              <p>{item.category}</p>
              <h1 className="text-4xl  font-bold text-gray-400 ">
                {item.title}
              </h1>
              {/* <p className="text-sm">Job Owner : {ownerEmail}</p> */}
              <div className="flex gap-5">
                {/* <div>
                  <p className="text-sm">Price Range</p>
                  <p className="text-lg">
                    ${minimumPrice} - ${maximumPrice}
                  </p>
                </div> */}
                <div>
                  <p className="text-sm">Posted Date</p>
                  <p className="text-lg">{item.publishDate}</p>
                </div>
                <div>
                  <p className="text-sm">Deadline</p>
                  <p className="text-lg">{item.deadlineDate}</p>
                </div>
              </div>
              <p>{item?.descriptio?.slice(0, 40)}..</p>
              <p>Total Vote : {item.vote}</p>
              <div className="flex gap-5 md:w-1/2 py-2">
                <Link
                  to={`/surveydetails/${item._id}`}
                  className="font-semibold text-green-500"
                >
                  VOTE NOW
                </Link>
                {/* <button
                className="font-semibold text-red-500"
                //   onClick={handleDelete}
              >
                DELETE
              </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
