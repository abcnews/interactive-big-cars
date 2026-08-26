import type { Marker } from "./types";
import { mount } from "svelte";
import { whenDOMReady, whenOdysseyLoaded } from "@abcnews/env-utils";
import { selectMounts } from "@abcnews/mount-utils";
import { loadScrollyteller } from "@abcnews/svelte-scrollyteller";

import "./global.css";

import App from "./App.svelte";

await whenDOMReady;
await whenOdysseyLoaded;

const scrollyMounts = selectMounts("scrollyteller");

scrollyMounts.forEach((mountNode) => {
	const scrollyData = loadScrollyteller<Marker>(mountNode, "u-full", "mark");

	mount(App, {
		target: scrollyData.mountNode,
		props: { panels: scrollyData.panels },
	});
});
