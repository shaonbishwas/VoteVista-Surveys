import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const MySurveys = () => {
  const axiosPublic = useAxiosPublic();
  const { data: published = [] } = useQuery({
    queryKey: ["mypublishedsurvey"],
    queryFn: async () => {
      const result = await axiosPublic.get("/surveys");
      return result.data;
    },
  });
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold my-10">PubLished</h1>
        {published.lenght === 0 ? (
          <h1 className="text-center text-3xl font-bold my-10 text-gray-500">
            Not Available
          </h1>
        ) : (
          <div className="grid grid-cols-3 gap-5 mx-5">
            {published.map((item) => (
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
        )}
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold my-10">UnpubLished</h1>
        {published.lenght === 0 ? (
          <h1 className="text-center text-3xl font-bold my-10 text-gray-500">
            Not Available
          </h1>
        ) : (
          <div className="grid grid-cols-3 gap-5 mx-5">
            {published.map((item) => (
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
        )}
      </div>
    </div>
  );
};

export default MySurveys;
