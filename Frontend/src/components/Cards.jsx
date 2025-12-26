import React from "react";

const Cards = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="mb-6 mt-6 w-full hover:shadow-2xl hover:-translate-y-1 duration-200 transition-all">
        <div className="card bg-base-100 w-full shadow-sm dark:bg-slate-900 dark:text-white">
          <figure>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              {item.title}
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-3 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
