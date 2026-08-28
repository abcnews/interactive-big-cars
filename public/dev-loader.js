(function () {
	function loadScript(src) {
		return new Promise(function (resolve, reject) {
			let script = document.createElement("script");
			script.type = "module";
			script.src = src;

			script.onload = () => resolve(script);
			script.onerror = () => reject(new Error(`Script load error for ${src}`));

			document.head.append(script);
		});
	}

	loadScript("http://localhost:5173/src/main.ts")
		.then(function () {
			console.log("Dev script loaded...");
		})
		.catch(function (error) {
			console.error("Dev script not loaded...");
		});
})();
