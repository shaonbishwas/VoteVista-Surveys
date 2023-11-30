import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useLoadUser = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data} = useQuery({
        queryKey: ["loaduser"],
        queryFn: async () => {
          const result = await axiosPublic.get(
            `user?email=${user.email}`
          );
          return result.data;
        },
      });
      console.log(data,'da')
    return data
};

export default useLoadUser;