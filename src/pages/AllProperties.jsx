import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";

const AllProperties = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data || []);
  const [loading, setLoading] = useState(false);
  // search and sort
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // default: newest first

  // Fetch properties from backend
  const fetchProperties = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000/all-properties?search=${search}&sortBy=postedDate&order=${sortOrder}`
    )
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProperties();
  };

  const handleSortChange = (e) => {
    e.preventDefault();
    setSortOrder(e.target.value);
    fetchProperties();
  };

  return (
    <>
      <div>
        <div className="text-3xl text-center font-bold my-5">
          {" "}
          All Properties
        </div>
        {/* Search and sort */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <label className="input rounded-full flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="search"
                placeholder="Search by Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none bg-transparent"
              />
            </label>
            <button className="btn btn-secondary rounded-full">
              {loading ? "Searching..." : "Search"}
            </button>
          </form>

          <select
            className="select select-bordered w-48"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProperties;
