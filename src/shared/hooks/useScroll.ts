import { useEffect } from "react";
import { useLocation } from "react-router";

export default function useScroll() {
	const { hash, key } = useLocation();

	useEffect(() => {
		if (hash) {
			const id = hash.replace("#", "");
			const element = document.getElementById(id);

			element?.scrollIntoView({ behavior: "smooth" });
			return;
		}

		window.requestAnimationFrame(() => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}, [hash, key]);
}
