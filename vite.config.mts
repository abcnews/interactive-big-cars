import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
	plugins: [mkcert(), svelte()],
	server: {
		cors: {
			origin: [
				/^https?:\/\/(?:[a-z0-9-]+\.)*abc\.net\.au(?::\d+)?$/i,
				/^https?:\/\/(?:[a-z0-9-]+\.)*abc-prod\.net\.au(?::\d+)?$/i,
			],
		},
		origin: "https://localhost:5173",
	},
	base: "./",
	build: {
		manifest: true,
	},
});
