import React from 'react'

export default function Card() {
    return (
        <div className="flex mt-4">
        <div className="rounded overflow-hidden shadow-lg w-1/3 cursor-pointer">
      <img className="w-full lazy" src="images/card/product1.jpg" alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Body Spray</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Body</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Cosmetics</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#men</span>
      </div>
    </div>
    </div>
    )
}
