import { Navigate, useLocation } from 'react-router-dom'

import { getData } from "../utils/utils";

interface RouteProps {
	children: JSX.Element | JSX.Element[] | React.ReactElement[];
}

const RequireAuth = ({ children }: RouteProps) => {
	const session = getData("user") || {};

	const isAuthenticated = session.hasOwnProperty("accessToken") ? session : null;

	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <>{children}</>;
}

export default RequireAuth