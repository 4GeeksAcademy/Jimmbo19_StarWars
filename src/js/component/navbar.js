import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img
						src={"https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png"}
						alt="starwars"
						style={{ maxHeight: "100px", objectFit: "cover" }}
						onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
					/>
				</Link>

				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favoritos ({store.favorites.length})
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{store.favorites.length > 0 ? (
								store.favorites.map((favorite, index) => (
									<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
										<span>{favorite}</span>
										<button
											className="btn btn-danger btn-sm m-1"
											onClick={() => actions.removeFavorite(favorite)}
										>
											x
										</button>
									</li>
								))
							) : (
								<li className="dropdown-item">No favorites</li>
							)}
						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};
