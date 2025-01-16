import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const myPath=window.location.pathname;
  const loggedIn=sessionStorage.getItem('id');
  return (
    <div>
      <header style={{ zIndex: 5 }} className="bg-white drop-shadow-xl fixed p-1 w-full top-0 h-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-purple-500" to="/">
                <span className="sr-only">Home</span>
                <img src="mealMission.svg" className="h-9 w-auto" alt="mealMission" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link to="/Home" className="text-gray-800 font-bold text-lg  transition hover:text-purple-500/75 " > Home </Link>
                  </li>
                  <li>
                    <Link to="/Feed" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Feed </Link>
                  </li>

                  <li>
                    <Link to="/LeaderBoard" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Leader Board </Link>
                  </li>

                  <li>
                    <Link to="/Blog" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Blog </Link>
                  </li>

                  <li>
                    <Link to="/AboutUs" className="text-gray-800 font-bold text-lg  transition hover:text-purple-500/75 " > About us </Link>
                  </li>

                  <li>
                    <Link to="/ContactUs" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75 " > Contact us </Link>
                  </li>
                  {loggedIn && (< Link to="/Community" className="text-gray-800 font-bold text-lg transition hover:text-purple-500/75" > Community </Link>)
                  }

                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {!loggedIn && <Link
                  className="rounded-md bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/Login"
                >
                  Login
                </Link>}

                {!loggedIn && <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-500"
                    to="/SignUp"
                  >
                    Register
                  </Link>
                </div>}
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
