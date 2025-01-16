import React from 'react'
const FeedCard = (props) => {
  return (
    <div className="flex my-4 justify-center">
    <div className="max-w-sm p-4 border-l-4 border-l-purple-500 rounded overflow-hidden shadow-2xl">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <img src={props.photo} alt={props.cityName} className="w-full rounded-md h-56 object-cover" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{props.cityName}</div>
      <p className="text-gray-700 text-base">{props.description}</p>
    </div>
    <div className="px-6 py-4">
      <p className="text-gray-600 text-sm">{props.time}</p>
    </div>
  </div>
  </div>
  )
}

export default FeedCard
