import { Link } from "react-router-dom";
import useLoadUser from "../hooks/useLoadUser";


const DashboardHome = () => {
    const user = useLoadUser()
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen space-y-10">
           
            <h1 className="text-5xl font-bold">My DashBoard</h1>
            {
                user?.role == 'user' && <Link to={'/surveys'}><button className="py-4 bg-orange-500 px-10 text-white rounded-full">Participate in Surveys</button></Link>
            }
         
        </div>
        </>
    );
};

export default DashboardHome;