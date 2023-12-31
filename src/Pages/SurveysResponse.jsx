import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import useLoadUser from "../hooks/useLoadUser";

const SurveysResponse = () => {
  const axiosPublic = useAxiosPublic();
  const user = useLoadUser()
  const { data = [], isLoading } = useQuery({
    queryKey: ["surveysresponse"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/surveys?email=${user.email}`);
      return result.data;
    },
  });
  console.log(data, isLoading)
  return (<>
    {data.length == 0 ? <div className="flex flex-col items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
        <h1>Wait Please Surver is Litle Bit Slow</h1>
      </div> :
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Name</td>
              <td>Publish Date</td>
              <td>Deadline</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <tr key={d._id}>
                <th></th>
                <td>{d.title}</td>
                <td>{d.publishDate}</td>
                <td>{d.deadlineDate}</td>
                <td>
                  <Link to={`/dashboard/showresponse/${d._id}`}>
                    <button className="bg-green-600 py-1 px-2 border text-white hover:text-black hover:bg-white hover:border-green-400">
                      See Response
                    </button>
                  </Link>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>}
  </>
  );
};

export default SurveysResponse;
