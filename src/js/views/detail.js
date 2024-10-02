import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Detail = () =>{
    const params= useParams()
    const [search, setSearch] = useState({});
    const { store, actions } = useContext(Context);
    

    const showDetail =()=> {
        if(params.nature=== "characters"){
            const selectDetail=store.characters.find((item)=>item._id=== params.id);
           setSearch(selectDetail);
        }else if (params.nature === "planets"){
            const selectDetail=store.planets.find((item)=>item._id===params.id);
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
        };}

    return(
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
          
        </div>

          </>
      ) : (
        <p>Loading...C: </p>
      )}
        
        </div>
        </>
    );
};