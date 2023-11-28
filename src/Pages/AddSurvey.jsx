import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import axios from 'axios'

const AddSurvey = () => {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const options = e.target.options.value.split(" ");
    const question = e.target.question.value;
    const deadlineDate = e.target.deadline.value;
    const surveyInfo = {
      title,
      description,
      category,
      options,
      question,
      deadlineDate,
      banner: "https://i.ibb.co/tqt9sJ6/img-placeholder.webp",
      like: 0,
      dislike: 0,
      vote: 0,
    };
    console.log(surveyInfo)
    axiosPublic.post("/pendingsurveys", surveyInfo).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "your Successfully added",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    });
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">Create a Survey</h1>

      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Chose Category</span>
          </label>
          <select name="category" id="" className="input input-bordered">
            <option value="Others">Others</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Gaming">Gaming</option>
            <option value="Hobbies">Hobbies</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Question</span>
          </label>
          <input
            type="text"
            placeholder="Question"
            name="question"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Options</span>
          </label>
          <textarea
            type="text"
            placeholder="Write Options by giving space like :  option1 option2 option3 ..."
            name="options"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Add a Description"
            name="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            // placeholder="Add a Description"
            name="deadline"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn rounded-full hover:border-[#ff5100] hover:text-[#ff5100] bg-[#ff5100] text-white">
            Create Survey
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSurvey;
