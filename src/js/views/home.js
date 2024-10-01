import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {
	
	const { store, actions } = useContext(Context);
	
	return(
	<div className="text-center mt-5">

		<div className="container ">
			<div className="overflow-x-scroll  d-flex ">
				{
					store.characters.map(people=>{
						return(
							<div key={people.id} className="card" style={{ minWidth: "18rem" }}>
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">{people.name}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>

	</div>
)};
