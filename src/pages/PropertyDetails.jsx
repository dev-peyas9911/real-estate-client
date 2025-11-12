import React from "react";
import { useLoaderData } from "react-router";

const PropertyDetails = () => {
  const data = useLoaderData(); // fetched from loader
  const property = data.result;
  const {
    propertyName,
    description,
    propertyPrice,
    location,
    category,
    image,
    postedDate,
    userName,
  } = property;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-xl">
      {/* Image Section */}
      <figure className="w-full h-80 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Property Info */}
      <div className="mt-6 space-y-3">
        <h2 className="text-3xl font-bold text-primary">{propertyName}</h2>

        <p className="text-gray-600">{description}</p>

        <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 mt-4">
          <p>
            <span className="font-semibold">Price:</span> ${propertyPrice}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Posted Date:</span>{" "}
            {new Date(postedDate).toLocaleDateString()}
          </p>
        </div>

        {/* Posted By */}
        <div className="mt-5 border-t pt-4">
          <p className="font-semibold text-gray-800">
            Posted by: <span className="text-primary">{userName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
