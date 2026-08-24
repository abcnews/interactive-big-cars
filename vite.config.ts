import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		host: "0.0.0.0",
		cors: true,
		origin: "http://localhost:5173",
	},
	base: "./",
	build: {
		manifest: true,
	},
});
