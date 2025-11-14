import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const PropertyDetails = () => {
  const data = useLoaderData(); // fetched from loader
  const property = data.result;
  console.log(property);
  const {
    _id,
    propertyName,
    shortDescription,
    propertyPrice,
    location,
    category,
    image,
    postedDate,
    userName,
  } = property;

  // ratings section
  const { user } = useContext(AuthContext);

  const [ratings, setRatings] = useState([]);

  // Load all ratings for this property
  useEffect(() => {
    fetch(`https://real-estate-server-blue.vercel.app/ratings/${_id}`)
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, [_id]);

  // Submit Rating
  const handleRatingSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const rating = form.rating.value;
    const reviewText = form.reviewText.value;

    const newRating = {
      propertyId: _id,
      propertyName,
      propertyImage: image,
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      rating: Number(rating),
      reviewText,
      reviewDate: new Date(),
    };

    fetch("https://real-estate-server-blue.vercel.app/add-rating", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRating),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Success!", "Your rating has been added", "success");
        setRatings([...ratings, newRating]); // update instantly
        form.reset();
      });
  };

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

        <p className="text-gray-600">{shortDescription}</p>

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
      {/* ⭐ Ratings & Reviews Section */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>

        {/* Rating Form */}
        <form onSubmit={handleRatingSubmit} className="space-y-3 mb-8">
          <label className="font-semibold">Your Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            required
            className="input input-bordered w-32"
          />

          <textarea
            name="reviewText"
            required
            placeholder="Write a short review..."
            className="textarea textarea-bordered w-full"
          ></textarea>

          <button className="btn btn-primary">Submit Review</button>
        </form>

        {/* Show All Reviews */}
        <div className="space-y-4">
          {ratings.length === 0 && <p>No reviews yet</p>}

          {ratings.map((r, index) => (
            <div key={index} className="p-4 border rounded-lg bg-base-200">
              <p className="font-bold">{r.reviewerName}</p>
              <p className="text-yellow-500">⭐ {r.rating} / 5</p>
              <p>{r.reviewText}</p>
              <p className="text-xs opacity-70">
                {new Date(r.reviewDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
