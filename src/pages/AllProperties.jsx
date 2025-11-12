import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../components/ModelCard";

const AllProperties = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data || []);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // const search_text = e.target.search.value
    // console.log(search_text)
    // setLoading(true)

    // fetch(`http://localhost:3000//search?search=${search_text}`)
    // .then(res=> res.json())
    // .then(data=> {
    //   console.log(data)
    //   setModels(data)
    //   setLoading(false)
    // })
  };

  return (
    <>
      <div>
        <div className="text-3xl text-center font-bold my-5">
          {" "}
          All Properties
        </div>

        <form
          onSubmit={handleSearch}
          className=" mt-5 mb-10 flex gap-2 justify-center"
        >
          <label className="input rounded-full ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn btn-secondary  rounded-full">
            {loading ? "Searching...." : "Search"}
          </button>
        </form>
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
