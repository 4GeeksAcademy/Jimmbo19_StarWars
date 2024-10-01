import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (

		<div className="container">


			<h1 className=" text-danger">Characters</h1>
			<div className="card-container ">

				{
					store.characters.map(people => {
						return (
							<div key={people.id} className="card" style={{ minWidth: "18rem" }}>
								<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="card-text">{people.name}</p>
								</div>
							</div>
						)
					})
				}

			</div>
		</div>



	)
};
