import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const AdminSurveyResponce = () => {
    const axiosPublic = useAxiosPublic();
  const { data = [] } = useQuery({
    queryKey: ["AdminSurveyResponce"],
    queryFn: async () => {
      const result = await axiosPublic.get('/surveys');
      return result.data;
    },
  });
    return (
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
    </div>
    );
};

export default AdminSurveyResponce;