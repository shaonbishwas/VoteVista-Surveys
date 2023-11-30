import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";


const MySurveys = () => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth()
  const [feedbacks, setFeedbacks] = useState([])
  const { data: published = [] } = useQuery({
    queryKey: ["mypublishedsurvey"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/surveys?email=${user.email}`);
      return result.data;
    },
  });
  const { data: unPublished = [] } = useQuery({
    queryKey: ["myunPublishedsurvey"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/pendingsurveys?email=${user.email}`);
      return result.data;
    },
  });
  const loadFeedbacks=(id)=>{
    axiosPublic.get(`/feedbacks/${id}`).then((res)=>{
      setFeedbacks(res.data)
    })
  }
  return (
    <>
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold my-10">PubLished</h1>
          {published.length === 0 ? (
            <h1 className="text-center text-3xl font-bold my-10 text-gray-500">
              Not Available
            </h1>
          ) : (
            <div className="grid grid-cols-3 gap-5 mx-5">
              {published.map((item) => (
                <div key={item._id}>
                  <div className="border-2 rounded-sm p-5 space-y-2 h-full overflow-x-hidden">
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
                    <div className="flex   py-2">
                      <Link
                        // to={`/surveydetails/${item._id}`}
                        className="font-semibold text-green-500"
                      >
                        <button
                          onClick={() => {
                            loadFeedbacks(item._id)
                            document.getElementById("my_modal_1").showModal();
                          }}
                        >
                          SEE FEEDBACK
                        </button>
                      </Link>
                      {/* <Link
                        // to={`/surveydetails/${item._id}`}
                        className="font-semibold text-green-500"
                      >
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                        >
                          ADMINS FEEDBACK
                        </button>
                      </Link> */}
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
          {unPublished.length === 0 ? (
            <h1 className="text-center text-3xl font-bold my-10 text-gray-500">
              Not Available
            </h1>
          ) : (
            <div className="grid grid-cols-3 gap-5 mx-5">
              {unPublished.map((item) => (
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
                    {/* <div className="flex gap-5 md:w-1/2 py-2">
                    <Link
                      to={`/surveydetails/${item._id}`}
                      className="font-semibold text-green-500"
                    >
                      VOTE NOW
                    </Link>
                    <button
                    className="font-semibold text-red-500"
                    //   onClick={handleDelete}
                  >
                    DELETE
                  </button>
                  </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white space-y-5">
          <h3 className="font-bold text-xl">Users Feedback</h3>
          <div className="h-32 overflow-y-scroll">
            {
              feedbacks.map((f)=> <div key={f._id} className="border">
                <div className="flex gap-5">
                <p className="text-sm text-gray-500">{f.email}</p>
                <p className="font-bold">{f.role}</p>
                </div>
                <h1 className="text-lg">{f.feedback}</h1>
              </div>)
            }
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Admin Feedback</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {/* <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog> */} 
    </>
  );
};

export default MySurveys;
