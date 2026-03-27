import { useEffect, useState } from "react";
import type { UserProfileDTO } from "../types/UserProfileDTO";
import { getProfile } from "../services/user.services";

export function useProfile() {
	const [userData, setUserData] = useState<UserProfileDTO | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchProfile = async () => {
			setIsLoading(true);
			const responseData = await getProfile();
			setUserData(responseData);
			setIsLoading(false);
		};
		fetchProfile();
	}, []);

	return {
		userData,
		isLoading,
	};
}
