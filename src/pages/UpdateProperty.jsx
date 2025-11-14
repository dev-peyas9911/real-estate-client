import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current property data
  useEffect(() => {
    fetch(`https://real-estate-server-blue.vercel.app/models/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        setProperty(data.result);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found.</p>;

  // Handle form submit
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedProperty = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      propertyPrice: form.propertyPrice.value,
      location: form.location.value,
      image: form.image.value,
      postedDate: property.postedDate,
      userName: user.displayName,
      userEmail: user.email,
    };

    fetch(`https://real-estate-server-blue.vercel.app/update-property/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Property updated successfully!");
        navigate(`/properties/${id}`); // go to details page
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Update Property</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Editable Fields */}
        <input
          defaultValue={property.propertyName}
          name="propertyName"
          type="text"
          placeholder="Property Name"
          className="input input-bordered w-full"
        />

        <textarea
          defaultValue={property.shortDescription}
          name="description"
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <input
          defaultValue={property.category}
          name="category"
          type="text"
          placeholder="Category"
          className="input input-bordered w-full"
        />

        <input
          defaultValue={property.propertyPrice}
          name="propertyPrice"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
        />

        <input
          defaultValue={property.location}
          name="location"
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
        />

        <input
          defaultValue={property.image}
          name="image"
          type="text"
          placeholder="Image Link"
          className="input input-bordered w-full"
        />

        {/* Read Only Fields */}
        <input
          value={user.displayName}
          readOnly
          className="input input-bordered w-full bg-base-200"
        />
        <input
          value={user.email}
          readOnly
          className="input input-bordered w-full bg-base-200"
        />

        <button className="btn btn-primary w-full mt-4">Update Property</button>
      </form>
    </div>
  );
};

export default UpdateProperty;
