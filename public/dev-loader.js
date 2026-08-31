import("https://localhost:5173/src/main.ts")
	.then(() => console.log("Dev script loaded..."))
	.catch((error) => console.error("Dev script not loaded...", error));
