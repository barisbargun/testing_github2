import { useState, useEffect } from "react";

import ApiRequest from "./ApiRequest.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

import Content from "./Grocery/Content.js";
import AddGrocery from "./Grocery/AddGrocery.js";
import SearchItems from "./Grocery/SearchItems.js";

const App = () => {
	const [searchInput, setSearchInput] = useState("");

	const [groceries, setGroceries] = useState([]);

	const [fetchError, setFetchError] = useState()
	const [loadingStatus, setLoadingStatus] = useState(true);

	useEffect(() => {

		try {
			const data = JSON.parse(localStorage.getItem("shoppingList"))
			setGroceries(data != 0 ? data : []);
			setFetchError(null)
			setLoadingStatus(false);

		} catch (er) {

			setFetchError(er.message);
		}


	}, [])


	useEffect(() => {
		groceries && localStorage.setItem("shoppingList", JSON.stringify(groceries));
	}, [groceries])



	const changeCheck = async (id) => {
		const items = groceries.map((item) => item.id == id ? {
			...item, checked: !item.checked
		} : item);
		setGroceries(items);
	}

	const deleteGrocery = async (id) => {
		const items = groceries.filter((item) => item.id != id);
		setGroceries(items);
	}

	const addGrocery = async (e) => {
		e.preventDefault();
		const name = e.target.elements.addInputText.value;

		if (name.length && name.length > 0) {

			const newGrocery = {
				id: groceries.length > 0 ? groceries[groceries.length - 1].id + 1 : 1,
				checked: false,
				name: name
			}
			e.target.elements.addInputText.value = ""
			setGroceries(prev => [...prev, newGrocery]);

		}
	}

	return (

		<div className="App">
			<Header />

			<div className="contentArea">
				<AddGrocery addGrocery={addGrocery} />
				<SearchItems
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<main>
					{loadingStatus ? <p>Loading..</p> :
						fetchError ?
							<p style={{ color: "red" }}>{fetchError}</p> :

							<Content
								groceries={groceries.filter(
									(e) => e.name.toLowerCase().includes(searchInput.toLowerCase())
								)}
								changeCheck={changeCheck}
								deleteGrocery={deleteGrocery}
							/>}

				</main>

			</div>

			{/* <Footer length={
				groceries?.filter(
					(e) => e.name.toLowerCase().includes(searchInput.toLowerCase())).length
			} /> */}
		</div>
	);
}

export default App;
