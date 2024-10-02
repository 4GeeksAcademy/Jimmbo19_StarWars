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
					store.characters.map((item,index) => {
						return (
							<div key={item.uid || index} className="card" style={{ minWidth: "18rem" }}>
								<img src={`https://via.placeholder.com/150?text=${item.properties.name}`} className="card-img-top" alt="..." />
								<div className="card-body">
									<p className=" fw-bold">{item.properties.name}</p>
									<p className=" mb-0 "> Gender : {item.properties.gender}</p>
									<p className=" mb-0 ">Heigth: {item.properties.height}</p>
									<p className=" mb-0 ">Hair Color: {item.properties.hair_color}</p>
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
								<img src={`https://via.placeholder.com/150?text=${planet.properties.name}`} className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="fw-bold">{planet.properties.name}</p>
									<p className="mb-0 ">Population: {planet.properties.population}</p>
									<p className=" mb-0 "> Terrain : {planet.properties.terrain}</p>
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
