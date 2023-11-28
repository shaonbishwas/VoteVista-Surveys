import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";


const DashBoard = () => {
    return (
        <>
        <div className="flex max-w-[1400px] mx-auto">
        <div className="bg-[#ff5100] min-h-screen w-[20%]">
        <DashboardNav></DashboardNav>
        </div>
        <div className=" w-[80%]">
        <Outlet></Outlet>
        </div>
        </div>
        </>
    );
};

export default DashBoard;