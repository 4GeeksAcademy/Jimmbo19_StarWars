const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			demo: [
				{
					name: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [

			],
			planets: [

			], 
			favorites:[

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch( `${getStore().urlBase}/people`, requestOptions)
					.then((response) => response.json())
					.then((data) => {
						for(let item of data.results){
							fetch(item.url)
							.then((response)=> response.json())
							.then((data)=>{
								console.log(data.result)
								setStore({characters:[...getStore().characters, data.result]})
							})
							.catch((error) => console.error(error))
						}
					})
					.catch((error) => console.error(error));

				fetch(`${getStore().urlBase}/planets`, requestOptions)
					.then((response) => response.json())
					.then((data) => {
						for(let item of data.results){
							fetch(item.url)
							.then((response)=> response.json())
							.then((data)=>{
								console.log(data.result)
								setStore({planets:[...getStore().planets, data.result]})
							})
							.catch((error) => console.error(error))
						}
					})
					.catch((error) => console.error(error));
			},

			addFavorite: (name) => {
                const store = getStore();
                if (!store.favorites.includes(name)) {
                    setStore({ favorites: [...store.favorites, name] });
                }
            },
            removeFavorite: (name) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== name) });
            },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
