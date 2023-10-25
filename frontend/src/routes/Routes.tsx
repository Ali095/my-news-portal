import { Route, Routes as DomRoutes } from "react-router-dom";
import RouteConfiguration from "./RoutesConfig";

function Routes() {
	return (
		<DomRoutes>
			{RouteConfiguration.map((route, i) => {
				return (
					<Route
						element={<route.component />}
						key={i}
						path={route.path}
					/>
				);
			})}
		</DomRoutes>
	);
}

export default Routes;
