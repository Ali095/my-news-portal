import BusinessPage from "../pages/BusinessPage";
import FavoritesPage from "../pages/FavoritesPage";
import GeneralPage from "../pages/GeneralPage";
import HealthPage from "../pages/HealthPage";
import HomePage from "../pages/HomePage";
import LatestPage from "../pages/LatestPage";
import NotFoundPage from "../pages/NotFoundPage";
import SciencePage from "../pages/SciencePage";
import SportsPage from "../pages/SportsPage";
import TechPage from "../pages/TechPage";
import { AvailableRoutes } from "./AvailableRoutes";

type RouteInformation = {
	path: string;
	component: () => JSX.Element | null;
};

const RouteConfiguration: RouteInformation[] = [
	{
		path: AvailableRoutes.Home,
		component: HomePage
	},
	{
		path: AvailableRoutes.General,
		component: GeneralPage
	},
	{
		path: AvailableRoutes.Business,
		component: BusinessPage
	},
	{
		path: AvailableRoutes.Health,
		component: HealthPage
	},
	{
		path: AvailableRoutes.Science,
		component: SciencePage
	},
	{
		path: AvailableRoutes.Sports,
		component: SportsPage
	},
	{
		path: AvailableRoutes.Technology,
		component: TechPage
	},
	{
		path: AvailableRoutes.Latest,
		component: LatestPage
	},
	{
		path: AvailableRoutes.Favorites,
		component: FavoritesPage
	},
	{
		path: "/:category", // Dynamic route parameter
		component: HomePage
	},
	{ path: "*", component: NotFoundPage }
];

export default RouteConfiguration;
