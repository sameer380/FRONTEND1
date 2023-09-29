import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	// Ensure the scroll position is reset when the route changes
	useEffect(() => {
		const cleanup = () => {
			window.scrollTo(0, 0);
		};
		window.addEventListener("beforeunload", cleanup);
		return () => {
			window.removeEventListener("beforeunload", cleanup);
		};
	}, []);

	return null;
}

export default ScrollToTop;
