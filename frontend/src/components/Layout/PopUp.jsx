import React from 'react'

const Popup = (props) => {
  return (
    <div className='w-80 drop-shadow-2xl absolute top-20 right-2' >
      <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
  <div className="flex items-start gap-4">
    <span className="text-green-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div className="flex-1">
      <strong className="block font-medium text-gray-900"> {props.title} </strong>

      <p className="mt-1 text-sm text-gray-700">{props.description}</p>

      <div className="mt-4 flex gap-2">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-indigo-700"
        >
          <span className="text-sm font-semibold"> Ok </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>

        <button className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50">
          <span className="text-sm">Cancle</span>
        </button>
      </div>
    </div>

  
  </div>
</div>
    </div>
  )
}

export default Popup
