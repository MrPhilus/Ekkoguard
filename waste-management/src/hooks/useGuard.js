import { identityService, storageService } from "../services";
import { useEffect, useState } from "react";
import { suspend } from "../redux/actions/suspense.action";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const useGuard = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		dispatch(suspend(true));
		const authData = storageService.getAuthData();
		if (!authData.accessToken) {
			navigate("/signin");
		}
		identityService
			.isAuthenticated()
			.then((authorized) => {
				if (!authorized) {
					navigate("/signin");
				}
				setAuthorized(authorized);
			})
			.finally(() => {
				dispatch(suspend(false));
			});
		// eslint-disable-next-line
	}, []);

	return authorized;
};