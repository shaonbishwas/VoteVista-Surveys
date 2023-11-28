import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Option from "../components/Option";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
const SurveyDetails = () => {
  const { user } = useAuth();
  const item = useLoaderData();
  const { data: comments = [], refetch: commentRefetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/comments/${item._id}`
      );
      return result.data;
    },
  });
  // console.log(comments, 'comments')
  const { data: feedbacks = [], refetch: feedbackRefetch } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:5000/feedbacks/${item._id}`
      );
      return result.data;
    },
  });
  //   console.log(feedbacks[0]?.feedback,'feedback')
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const feedbackInfo = {
      email: user.email,
      surveyId: item._id,
      feedback,
    };
    axios.post("http://localhost:5000/feedback", feedbackInfo).then(() => {
      e.target.feedback.value = "";
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "your feedback Successfully submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      feedbackRefetch();
    });
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const commentInfo = {
      email: user.email,
      surveyId: item._id,
      comment,
    };
    axios.post("http://localhost:5000/comments", commentInfo).then(() => {
      e.target.comment.value = "";
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "your comment Successfully submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      commentRefetch();
    });
    console.log(commentInfo);
    // console.log(user)
  };

  const handleVote=()=>{
    console.log('bote')
    const body = {
      email:user.email,
      vote:1
    }
    axios.post(`http://localhost:5000/vld/${item._id}`,body).then(() => {
      // e.target.comment.value = "";
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "your comment Successfully submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      commentRefetch();
    });
  }
//   const handleReport = (e)=>{
//     e.preventDefault()
//     // Swal.fire({
//     //     title: "Success",
//     //     text: "Successfully Reported",
//     //     icon: "success",
//     //     showConfirmButton: false,
//     //     timer: 1000,
//     //   });
//   }
  return (
    <>
      <div className="my-20 flex gap-10 max-w-[1400px] mx-auto">
        <div>
          <img src={item?.banner} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-500">{item?.title}</h1>
          <h1 className="text-4xl font-bold my-3">{item?.description}</h1>
          <h2 className="text-3xl font-semibold text-gray-700">
            {item?.questionText}
          </h2>
          {/* <div>
        {item?.question?.options?.map((value, idx) => (
          <Option key={idx}></Option>
        ))}
        </div> */}
          <Option options={item?.options}></Option>
          <div className="flex">
            <button className="rounded-s-3xl border-2 p-2 flex gap-2">
              <AiOutlineLike className="text-2xl" />0
            </button>
            <button className="rounded-e-3xl border-l-0 border-2 p-2">
              <BiDislike className="text-2xl" />
            </button>
          </div>
          <div className="flex gap-10 mt-5">
            <button onClick={handleVote} className="bg-sky-800 text-white py-2 px-8 rounded-3xl hover:shadow-xl hover:border-sky-800 border hover:bg-white hover:text-black">
              Vote
            </button>
            <button className="hover:bg-red-800 border border-red-800 hover:text-white py-2 px-8 rounded-3xl" onClick={() => document.getElementById("my_modal_1").showModal()}>
              Report
            </button>
          </div>
        </div>
      </div>
      <div className="my-20 flex  max-w-[1400px] mx-auto">
        <div className="flex-1 space-y-3 border-e-2">
          <h1 className="text-xl font-semibold">FeedBack</h1>
          <form action="" onSubmit={handleSubmitFeedback}>
            <div>
              <input
                type="text"
                placeholder="Write Feedback"
                name="feedback"
                className="border-2 py-2 px-4 rounded-s-3xl"
              />
              <input
                type="submit"
                value="Send"
                className="bg-sky-800 text-white py-2 px-8 rounded-e-3xl hover:shadow-xl hover:border-sky-800 border hover:bg-white hover:text-black"
              />
            </div>
          </form>
          <div className="space-y-4">
            {feedbacks?.length === 0 ? (
              <p>No Feedback yet</p>
            ) : (
              feedbacks?.map((feedback) => (
                <div key={feedback._id}>
                  <h1 className="text-xs">{feedback.email}</h1>
                  <p className="text-lg font-semibold">{feedback?.feedback}</p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex-1 space-y-5 pl-10">
          <h1 className="text-xl font-semibold">All Comments</h1>

          <form action="" onSubmit={handleSubmitComment}>
            <div>
              <input
                type="text"
                placeholder="Write Comment"
                name="comment"
                className="border-2 py-2 px-4 rounded-s-3xl"
              />
              <input
                type="submit"
                value="Send"
                className="bg-sky-800 text-white py-2 px-8 rounded-e-3xl hover:shadow-xl hover:border-sky-800 border hover:bg-white hover:text-black"
              />
            </div>
          </form>
          <div className="space-y-4">
            {comments?.length === 0 ? (
              <p>No Comment yet</p>
            ) : (
              comments?.map((comment) => (
                <div key={comment._id}>
                  <h1 className="text-xs">{comment.email}</h1>
                  <p className="text-lg font-semibold">{comment.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-2xl mb-5">Chose a Reason to Report</h3>
          <select name="" id="" className="input input-bordered">
            <option value="">others</option>
            <option value="">Duplicated Surveys</option>
            <option value="">Harassment or Intimidation</option>
            <option value="">Bias or Leading Questions</option>
            <option value="">Inappropriate Content</option>
            <option value="">Lack of Informed Consent</option>
            <option value="">Privacy Concerns</option>
          </select>
          <p className="py-4">
            Press ESC key to ignore
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" >Report Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SurveyDetails;
