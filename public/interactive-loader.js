(async function () {
	// TODO: Change version on publish or use the currentScript src method
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	const baseUrl =
		"https://www.abc.net.au/res/sites/news-projects/interactive-big-cars/1.0.0/";
	const manifestUrl = `${baseUrl}/.vite/manifest.json`;

	const manifest = await fetch(manifestUrl).then((r) => r.json());
	const scriptSrc = manifest["index.html"].file;

	const script = document.createElement("script");
	script.type = "module";
	script.src = `${baseUrl}${scriptSrc}`;
	document.head.appendChild(script);

	const styles = manifest["index.html"].css;
	styles.forEach((style) => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = `${baseUrl}${style}`;
		document.head.appendChild(link);
	});
})();
