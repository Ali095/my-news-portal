import { useState } from "react";
import "../../../assets/styles/navbar/searchBar.scss";
import { NavBarProps } from "../NavBar";
import { getTopNewsStories } from "../../../api/stories";
import { useNavigate } from "react-router-dom";

function SearchBar({ setSearchResults }: NavBarProps) {
	const [selectedOption, setSelectedOption] = useState<string>("");
	const navigate = useNavigate();

	const handleOptionChange = (value: string) => {
		setSelectedOption(value);
	};

	const handleSearch = () => {
		if (selectedOption && selectedOption !== "") {
			getTopNewsStories(selectedOption).then((stories) =>
				setSearchResults(stories)
			);
			navigate(`/${selectedOption}`);
		}
	};

	return (
		<div className="navbar__search-bar">
			<form
				className="search-bar__form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSearch();
				}}
			>
				<label className="search-bar__form__label">
					<select
						value={selectedOption}
						placeholder="Select section to search stories"
						onChange={(e) => handleOptionChange(e.target.value)}
						className="search-bar__form__input"
					>
						<option value="" disabled hidden>
							Select section to search stories
						</option>
						<option value="arts">Arts</option>
						<option value="automobiles">Automobiles</option>
						<option value="books/review">Books/Review</option>
						<option value="business">Business</option>
						<option value="fashion">Fashion</option>
						<option value="food">Food</option>
						<option value="health">Health</option>
						<option value="home">Home</option>
						<option value="insider">Insider</option>
						<option value="magazine">Magazine</option>
						<option value="movies">Movies</option>
						<option value="nyregion">NY Region</option>
						<option value="obituaries">Obituaries</option>
						<option value="opinion">Opinion</option>
						<option value="politics">Politics</option>
						<option value="realestate">Real Estate</option>
						<option value="science">Science</option>
						<option value="sports">Sports</option>
						<option value="sundayreview">Sunday Review</option>
						<option value="technology">Technology</option>
						<option value="theater">Theater</option>
						<option value="t-magazine">T-Magazine</option>
						<option value="travel">Travel</option>
						<option value="upshot">Upshot</option>
						<option value="us">US</option>
						<option value="world">World</option>
					</select>
					<button type="submit" className="search-bar__form__submit">
						Search
					</button>
				</label>
			</form>
		</div>
	);
}

export default SearchBar;
