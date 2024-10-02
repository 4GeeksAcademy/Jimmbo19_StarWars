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

    return(
        <>
        {search ? (
        <>
          <h1>{search.properties?.name || "No name available"}</h1>
          <p>ID: {search._id}</p>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
        </>
    );
};