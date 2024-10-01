import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<>
		
		<div className="container">


			<h1 className=" text-danger">Characters</h1>
			<div className="card-container ">

				{
					store.characters.map(people => {
						return (
							<div key={people.uid} className="card" style={{ minWidth: "18rem" }}>
								<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className=" fw-bold">{people.name}</p>
									<p className=" mb-0 "> Gender :{people.gender}</p>
									<p className=" mb-0 ">Heigth:{people.height}</p>
									<p className=" mb-0 ">Hair Color:{people.hair_color}</p>
								</div>
								<div className="card-footer d-flex justify-content-between ">
										<button type="button" className="btn btn-outline-primary">Learn more</button>
										<button type="button" className="btn btn-outline-warning">Corazon</button>
									</div>
							</div>
						)
					})
				}

			</div>
		</div>
		<div className="container">


			<h1 className=" text-danger">Planets</h1>
			<div className="card-container ">

				{
					store.planets.map(planet => {
						return (
							<div key={planet.uid} className="card" style={{ minWidth: "18rem" }}>
								<img src="https://starwars-visualguide.com/assets/img/planets/9.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="fw-bold">{planet.name}</p>
									<p className="mb-0 ">Population:{planet.name}</p>
									<p className=" mb-0 "> Terrain :{planet.gender}</p>
								</div>
									<div className="card-footer d-flex justify-content-between ">
										<button type="button" className="btn btn-outline-primary">Learn more</button>
										<button type="button" className="btn btn-outline-warning">Corazon</button>
									</div>
							</div>
						)
					})
				}

			</div>
		</div>
		</>
	


	)
};
