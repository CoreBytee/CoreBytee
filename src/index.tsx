import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import { fetchGoatcounter } from "./macros/goatcounter" with { type: "macro" };

if (import.meta.hot && !import.meta.hot.data.goatcounter) {
	const element = document.createElement("script");
	element.setAttribute(
		"data-goatcounter",
		"https://goatcounter.corebyte.me/count",
	);
	element.innerHTML = await fetchGoatcounter();
	document.head.appendChild(element);
	import.meta.hot.data.goatcounter = true;
}

const element = document.getElementById("root")!;
const app = (
	<StrictMode>
		<App />
	</StrictMode>
);

if (import.meta.hot) {
	if (!import.meta.hot.data.root)
		import.meta.hot.data.root = createRoot(element);
	const root = import.meta.hot.data.root;
	root.render(app);
} else {
	createRoot(element).render(app);
}

console.log(await fetchGoatcounter());
