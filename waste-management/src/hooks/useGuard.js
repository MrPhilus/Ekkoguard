import { isAuthenticated } from "../services/identityService";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { showToast } from "../utils/toastify";

export const useGuard = () => {
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	const authorized = isAuthenticated()

	useEffect(() => {

		if (!authorized) {
			showToast("Please login to continue.", "warn", "You're not logged in!")
			navigate("/login");
		}

	}, []);

	return authorized;
}