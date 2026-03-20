import { useEffect } from "react";

export default function useScroll() {
	useEffect(() => {
		if (hash) {
			const id = hash.replace("#", "");

			const element = document.getElementById(id);
			element?.scrollIntoView();
			return;
		}

		window.requestAnimationFrame(() => {
			window.scrollTo({ top: 0 });
		});
	}, [hash, key]);
}
