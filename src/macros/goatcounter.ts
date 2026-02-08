export async function fetchGoatcounter() {
	const response = await fetch("https://gc.zgo.at/count.js");
	const text = await response.text();
	return text;
}
