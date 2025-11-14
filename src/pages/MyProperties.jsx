import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-properties?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProperties(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <p>Please wait.. Loading...</p>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {properties.map((property) => (
          <div key={property._id} className="card bg-base-100 shadow-xl border">
            <div className="card-body">
              <h2 className="card-title">{property.propertyName}</h2>

              <p>
                <span className="font-semibold">Category:</span> {property.category}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {property.propertyPrice}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {property.location}
              </p>
              <p className="text-sm opacity-70">
                <span className="font-semibold">Posted Date:</span>{" "}
                {property.postedDate}
              </p>

              <div className="card-actions justify-end mt-2">
                <Link to={`/properties/${property._id}`} className="btn btn-sm btn-info">View Details</Link>
                <button className="btn btn-sm btn-success">Update</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
