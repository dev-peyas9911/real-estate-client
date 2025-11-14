import React from "react";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
    const {propertyName, category, shortDescription, propertyPrice, location, image, userName, _id} = model;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
      {/* Thumbnail Image */}
      <figure className="h-48 w-full">
        <img
          src={image}
          alt={propertyName}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{propertyName}</h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-primary font-semibold text-lg">${propertyPrice}</p>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-gray-400 font-semibold">{shortDescription}</p>
        <p className="text-sm text-gray-600">
          Posted by: <span className="font-semibold">{userName}</span>
        </p>
        

        {/* See Details Button */}
        <div className="card-actions justify-end mt-3">
          <Link to={`/properties/${_id}`}>
            <button className="btn btn-outline btn-primary btn-sm">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
