import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Detail } from "./detail";

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
								<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
								<div className="card-body">
									<p className=" fw-bold">{item.properties.name}</p>
									<p className=" mb-0 "> Gender : {item.properties.gender}</p>
									<p className=" mb-0 ">Heigth: {item.properties.height}</p>
									<p className=" mb-0 ">Hair Color: {item.properties.hair_color}</p>
								</div>
								<div className="card-footer d-flex justify-content-between ">
										<Link to={`/characters/${item._id}`}>
										<button type="button" className="btn btn-outline-primary">Learn more</button>
										
										</Link>
										<button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
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
								<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
								<div className="card-body">
									<p className="fw-bold">{planet.properties.name}</p>
									<p className="mb-0 ">Population: {planet.properties.population}</p>
									<p className=" mb-0 "> Terrain : {planet.properties.terrain}</p>
								</div>
									<div className="card-footer d-flex justify-content-between ">
										<Link to={`/planets/${planet._id}`}>
											<button type="button" className="btn btn-outline-primary">Learn more</button>
										</Link>
										<button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
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
