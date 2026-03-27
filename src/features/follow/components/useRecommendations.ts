import { useEffect, useState } from "react";
import { getRecommendations } from "../services/follow.service";
import type { RecommendationsDTO } from "../types/RecommendationsDTO";

export function useRecommendations() {
	const [recommendations, setRecommendatoins] =
		useState<RecommendationsDTO | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchRecommendations = async () => {
			setIsLoading(true);

			const responseData = await getRecommendations();
			setRecommendatoins(responseData);

			setIsLoading(false);
		};

		fetchRecommendations();
	}, []);

	return {
		recommendations,
		isLoading,
	};
}
