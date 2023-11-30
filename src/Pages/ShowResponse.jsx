import { useQuery } from "@tanstack/react-query";
import Chart from "../components/Chart";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const ShowResponse = () => {
  const data = useLoaderData();
  // console.log(data._id);
  const axiosPublic = useAxiosPublic();
  const { data: votes = [] } = useQuery({
    queryKey: ["voteforsurvey"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/votes/${data._id}`);
      return result.data;
    },
  });
  console.log(votes);
  return (
    <div>
      <div className="flex items-center justify-center">
        <Chart survey={data}></Chart>
      </div>
      
      <div>
        {votes.length === 0 ? (
          <h1 className="text-center my-10 text-2xl font-bold text-gray-400">
            Do not have any vote yet
          </h1>
        ) : (
          <div className="overflow-x-auto mt-10">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th></th>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Vote Time</td>
                  <td>Vote at</td>
                  <td></td>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {votes?.map((user) => (
                  <tr key={user._id}>
                    <th></th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>true</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowResponse;
