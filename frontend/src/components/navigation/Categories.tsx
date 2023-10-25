import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/navbar/categories.scss";
import BusinessIcon from "../icons/BusinessIcon";
import GeneralIcon from "../icons/GeneralIcon";
import HealthIcon from "../icons/HealthIcon";
import HomeIcon from "../icons/HomeIcon";
import ScienceIcon from "../icons/ScienceIcon";
import SportsIcon from "../icons/SportsIcon";
import TechIcon from "../icons/TechIcon";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import StarIcon from "../icons/StarIcon";

function Categories() {
	const location = useLocation();
	const path = location.pathname;

	return (
		<div className="categories-container">
			<Link to={AvailableRoutes.Home}>
				<div
					className={
						path === "/" ? "category-item active" : "category-item"
					}
				>
					<HomeIcon />
					<div>Home</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.General}>
				<div
					className={
						path === "/general"
							? "category-item active"
							: "category-item"
					}
				>
					<GeneralIcon />
					<div>General</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Business}>
				<div
					className={
						path === "/business"
							? "category-item active"
							: "category-item"
					}
				>
					<BusinessIcon />
					<div>Business</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Health}>
				<div
					className={
						path === "/health"
							? "category-item active"
							: "category-item"
					}
				>
					<HealthIcon />
					<div>Health</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Science}>
				<div
					className={
						path === "/science"
							? "category-item active"
							: "category-item"
					}
				>
					<ScienceIcon />
					<div>Science</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Sports}>
				<div
					className={
						path === "/sports"
							? "category-item active"
							: "category-item"
					}
				>
					<SportsIcon />
					<div>Sports</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Technology}>
				<div
					className={
						path === "/technology"
							? "category-item active"
							: "category-item"
					}
				>
					<TechIcon />
					<div>Tech</div>
				</div>
			</Link>
			<Link to={AvailableRoutes.Favorites}>
				<div
					className={
						path === "/favorites"
							? "category-item active"
							: "category-item"
					}
				>
					<StarIcon />
					<div>Favorites</div>
				</div>
			</Link>
		</div>
	);
}

export default Categories;
