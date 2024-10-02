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
         
            <div className="col-md-8"> 
          <h1>{search.properties?.name || "No name available"}</h1>
          <p>ID: {search._id}</p>

            </div  >  

        </div>

          </>
      ) : (
        <p>Loading...</p>
      )}
        </>
    );
};