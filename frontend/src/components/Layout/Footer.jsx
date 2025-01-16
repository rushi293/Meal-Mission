import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{ zIndex: 5 }}>
      <footer className="bg-gray-100 mt-12">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-purple-500 p-2 text-white shadow transition hover:bg-purple-500/75 sm:p-3 lg:p-4"
              href="#MainContent"
            >
              <span className="sr-only">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <img src="mealMission.svg" className="h-9 w-auto" alt="mealMission" />
              <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Share good memories with us and contribute to feeding the needy.
                Join us to make a difference and spread positivity!
              </p>
            </div>

            <div>
              <ul
                className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
              >
                <li>
                  <Link to="/Feed" className="text-gray-700 font-semibold transition hover:text-purple-500/75 " > Feed </Link>
                </li>

                <li>
                  <Link to="/LeaderBoard" className="text-gray-700 transition font-semibold hover:text-purple-500/75" href="#"> Leaderboard </Link>
                </li>

                <li>
                  <Link to="/AboutUs" className="text-gray-700 transition font-semibold hover:text-purple-500/75" href="#"> About us </Link>
                </li>

                <li>
                  <Link to="/ContactUs" className="text-gray-700 transition font-semibold hover:text-purple-500/75" href="#"> Contact us </Link>
                </li>

                <li>
                  <Link to="/SignUp" className="text-gray-700 transition font-semibold hover:text-purple-500/75" href="#"> Join us </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 lg:mt-0">
              {/* Social Media Logos */}
              <a href="#" className="mr-4">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500 w-10 h-10 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="mr-4">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500 w-10 h-10 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500 w-10 h-10 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
