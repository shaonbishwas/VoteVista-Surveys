import { NavLink } from "react-router-dom";
import useLoadUser from "../hooks/useLoadUser";

const DashboardNav = () => {
  const user = useLoadUser();
  return (
    <div className="flex flex-col text-left px-5">
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
            : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
        }
        to="/dashboard"
      >
        Dashboard Home
      </NavLink>
      {user?.role == "surveyor" && (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
              : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
          }
          to="/dashboard/mysurveys"
        >
          My Surveys
        </NavLink>
      )}
      {(user?.role == "admin" || user?.role == "surveyor") && (
        <>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active lg:mt-2 bg-black rounded-full p-1 px-3 text-[#ffffff] font-extraboldbold text-lg"
                : "lg:mt-2 text-lg hover:bg-black hover:text-white rounded-full p-1 px-3 duration-500"
            }
            to={user?.role == 'admin' ? "/dashboard/adminsurveyresponce":"/dashboard/surveyresponse"}
          >
            Survey Response
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
        </>
      )}
      {user?.role == "admin" && (
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
      )}
      {user?.role == "admin" && (
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
      )}
      <hr className="border border-black w-[98%] mx-auto mt-3" />
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
        to="/contactus"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default DashboardNav;
