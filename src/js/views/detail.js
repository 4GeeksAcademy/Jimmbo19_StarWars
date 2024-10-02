import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Detail = () => {
  const params = useParams()
  const [search, setSearch] = useState({});
  const { store, actions } = useContext(Context);


  const showDetail = () => {
    if (params.nature === "characters") {
      const selectDetail = store.characters.find((item) => item._id === params.id);
      setSearch(selectDetail);
    } else if (params.nature === "planets") {
      const selectDetail = store.planets.find((item) => item._id === params.id);
      setSearch(selectDetail);
    }
  }

  useEffect(() => {
    showDetail();
  }, [params, store.characters, store.planets]);

  const getImageUrl = () => {
    if (params.nature === "characters") {
      return `https://starwars-visualguide.com/assets/img/characters/${search._id}.jpg`;
    } else if (params.nature === "planets") {
      return `https://starwars-visualguide.com/assets/img/planets/${search._id}.jpg`;
    };
  }

  return (
    <>
      <div className="container">
        {search ? (
          <>
            <div className="d-flex flex-row align-items-start justify-content-between">

              <div className="col-md-4">
                <img
                  src={getImageUrl()}
                  alt={search.properties?.name}
                  style={{ width: "100%", height: "auto" }}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                />

              </div>

              <div className="description col-md-8 text-center m-4">
                <h1>{search.properties?.name || "No name available"}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

              </div  >

            </div>
            <div className="container footerdetail mt-5">
              <h2>{search.properties?.name}</h2>

              <div className="d-flex justify-content-between text-center">
                {params.nature === "characters" ? (

                  <>
                    <div className="p-2">
                      <h5>Height</h5>
                      <p>{search.properties?.height || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Mass</h5>
                      <p>{search.properties?.mass || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Gender</h5>
                      <p>{search.properties?.gender || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Hair Color</h5>
                      <p>{search.properties?.hair_color || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Eye Color</h5>
                      <p>{search.properties?.eye_color || "N/A"}</p>
                    </div>
                  </>
                ) : params.nature === "planets" ? (

                  <>
                    <div className="p-2">
                      <h5>Climate</h5>
                      <p>{search.properties?.climate || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Population</h5>
                      <p>{search.properties?.population || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Terrain</h5>
                      <p>{search.properties?.terrain || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Diameter</h5>
                      <p>{search.properties?.diameter || "N/A"}</p>
                    </div>
                    <div className="p-2">
                      <h5>Gravity</h5>
                      <p>{search.properties?.gravity || "N/A"}</p>
                    </div>
                  </>
                ) : null}
              </div>
            </div>

          </>
        ) : (
          <p>Loading...C: </p>
        )}

      </div>
    </>
  );
};