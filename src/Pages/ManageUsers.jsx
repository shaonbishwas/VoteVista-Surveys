import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();
  const [filterrole, setFilterrole] = useState('');
  const { data: users = [], refetch } = useQuery({
    queryKey: ["manageusers"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/users?role=${filterrole}`);
      return result.data;
    },
  });
  // console.log(users);
  const handleAdminSubmit = (id) => {
    console.log("admin");
    axiosPublic.put(`/updaterole/${id}?role=admin`).then(() => {
      refetch();
    });
  };
  const handleSurveyorSubmit = (id) => {
    console.log("surveyor");
    axiosPublic.put(`/updaterole/${id}?role=surveyor`).then(() => {
      refetch();
    });
  };
  
  const filterButton = ()=>{
    refetch()
  }
  return (
    <>
      <div>
        <div className="text-center text-3xl font-bold my-10">
          <h1>Users Informations</h1>
        </div>
        <div className="flex items-center gap-5 mx-5 my-5">
          Filter :
          <select
            name="filter"
            id=""
            className="border-2 py-1 px-3"
            onChange={(e)=>setFilterrole(e.target.value)}
          >
            <option value="">All</option>
            <option value="user">user</option>
            <option value="pro-user">Pro User</option>
            <option value="surveyor">Surveyor</option>
          </select>
          <button className="border-2 border-black py-1 px-3 rounded-3xl" onClick={filterButton}>Filter</button>
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
                    {user.role === "admin" || (
                      <button
                        onClick={() => handleAdminSubmit(user._id)}
                        className="bg-green-600 py-1 px-2 border text-white hover:text-black hover:bg-white hover:border-green-400"
                      >
                        Admin
                      </button>
                    )}
                    {user.role === "surveyor" || (
                      <button
                        onClick={() => handleSurveyorSubmit(user._id)}
                        className="bg-green-300 py-1 px-2 border  hover:text-black hover:bg-white hover:border-green-400"
                      >
                        Surveyor
                      </button>
                    )}
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
