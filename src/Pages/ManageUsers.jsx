import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosPublic.get("/users");
      return result.data;
    },
  });
  console.log(users);
  return (
    <>
      <div>
        <div className="text-center text-3xl font-bold my-10">
          <h1>Users Informations</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Update To</td>
                <td></td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <th></th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="bg-green-600 py-1 px-2 border text-white hover:text-black hover:bg-white hover:border-green-400">Admin</button>
                    <button className="bg-green-300 py-1 px-2 border  hover:text-black hover:bg-white hover:border-green-400">Surveyor</button>
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
