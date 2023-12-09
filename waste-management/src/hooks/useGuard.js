import { isAuthenticated } from "../services/identityService";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const useGuard = () => {
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const authorized = isAuthenticated()

	useEffect(() => {

		if (!authorized) {
			navigate("/login");
		}

	}, []);

	return authorized;
}