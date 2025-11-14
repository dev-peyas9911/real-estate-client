import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch(
      `https://real-estate-server-blue.vercel.app/my-ratings?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6">My Ratings</h1>

      <div className="space-y-4">
        {ratings.map((r) => (
          <div key={r._id} className="card bg-base-100 shadow p-4 border">
            <div className="flex gap-4">
              <img
                src={r.propertyImage}
                alt=""
                className="w-32 h-24 object-cover rounded"
              />

              <div>
                <p className="font-bold">{r.propertyName}</p>
                <p>⭐ {r.rating}/5</p>
                <p className="text-sm">{r.reviewText}</p>
                <p className="text-xs opacity-70">
                  {new Date(r.reviewDate).toLocaleDateString()}
                </p>
                <p className="text-xs opacity-70">
                  Reviewed by: {r.reviewerName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
