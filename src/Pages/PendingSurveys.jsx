import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
const PendingSurveys = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data = [], refetch } = useQuery({
    queryKey: ["pending surveys"],
    queryFn: async () => {
      const result = await axiosPublic.get(
        "https://vote-viste-server-side.vercel.app/pendingsurveys"
      );
      return result.data;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    const feedback = e.target.feedback.value;
    const id = e.target.id.value;
    console.log(feedback, id);
    const feedbackInfo = {
      email: user.email,
      surveyId: id,
      feedback,
      role: "admin",
    };
    axiosPublic.post("/feedback", feedbackInfo).then(() => {
      axiosPublic.post(`/survey/${id}`).then(() => {
        refetch();
      });
    });
  };
  // const handleSubmit2 = (id) => {
  //   console.log(id);
  // };
  return (
    <div>
      <h1 className="text-3xl font-bold mt-10 text-center border-b-2 pb-5 mx-5">
        Pending Surveys
      </h1>
      <div>
        <div className="grid grid-cols-3 mx-5">
          {data?.map((pendingSurveys) => (
            <div
              key={pendingSurveys._id}
              className="border-2 rounded-sm p-5 space-y-2 h-full"
            >
              <p>{pendingSurveys.category}</p>
              <h1 className="text-4xl  font-bold text-gray-400 ">
                {pendingSurveys.title}
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
                  <p className="text-lg">{pendingSurveys.publishDate}</p>
                </div>
                <div>
                  <p className="text-sm">Deadline</p>
                  <p className="text-lg">{pendingSurveys.deadlineDate}</p>
                </div>
              </div>
              <p>{pendingSurveys.description.slice(0, 100)}..</p>
              <Link
                to={`/surveydetails/${pendingSurveys._id}`}
                className="text-blue-600 mt-2"
              >
                View Details...
              </Link>
              <form
                action=""
                className="flex flex-col space-y-2"
                onSubmit={handleSubmit}
              >
                <textarea
                  name="feedback"
                  id=""
                  required
                  cols="30"
                  rows="2"
                  placeholder="Give a Feedback"
                  className="border-2 p-2"
                ></textarea>
                <input
                  type="text"
                  name="id"
                  defaultValue={pendingSurveys._id}
                  className="hidden"
                />
                <button
                  // onClick={() => handleSubmit2(pendingSurveys._id)}
                  className="font-semibold text-green-500"
                >
                  PUBLISH
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingSurveys;
