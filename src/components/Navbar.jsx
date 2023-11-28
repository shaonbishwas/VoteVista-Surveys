// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  const links = (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
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
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
        }
        to="/surveys"
      >
        Surveys
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
        }
        to="becomepro"
      >
        Become Pro
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
        }
        to="contactus"
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
        }
        to="aboutus"
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2  text-[#ff5100] font-bold text-lg"
            : "lg:mt-2 text-lg"
        }
        to="dashboard"
      >
        Dashboard
      </NavLink>

      {user?.email ? (
        <NavLink className="lg:mt-2 text-lg" onClick={handleLogout}>
          logOut
        </NavLink>
      ) : (
        <NavLink className="lg:mt-2 text-lg" to="login">
          logIn
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-[1400px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex-1 px-2 mx-2 text-2xl font-semibold">
          Vote
          <span className="font-bold text-4xl text-[#ff5100]">V</span>ista
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 h-12 items-center">
            <div className="text-sm">
              <p className="text-right">{user.displayName || "User Name"}</p>
              <p className="text-xs lg:text-sm">{user.email}</p>
            </div>
            <div className="h-full">
              {user.photoURL ? (
                <img
                  className="h-full rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2 h-12 items-center">
            <div className="text-sm">
              <p>Guest User</p>
            </div>
            <div className="h-full">
              <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
