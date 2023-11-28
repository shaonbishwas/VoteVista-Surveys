import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="flex flex-col text-left ">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
            : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
            : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
        }
        to="/dashboard/addsurvey"
      >
        add survey
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
            : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
        }
        to="/dashboard/manageusers"
      >
        Manage Users
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
            : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
        }
        to="/dashboard/pendingsurveys"
      >
        Pending Surveys
      </NavLink>
    </div>
  );
};

export default DashboardNav;
