import { mount } from "svelte";
import { whenDOMReady, whenOdysseyLoaded } from "@abcnews/env-utils";
import { selectMounts } from "@abcnews/mount-utils";
import { loadScrollyteller } from "@abcnews/svelte-scrollyteller";

import "./global.css";

declare global {
   interface Window {
       Alpine:any;
   }
	}

import App from "./App.svelte";

export type MyPanelData = {
	car: string;
};

await whenDOMReady;
await whenOdysseyLoaded;

const scrollyMounts = selectMounts("scrollyteller");

console.log(scrollyMounts);

scrollyMounts.forEach((mountNode) => {
	const scrollyData = loadScrollyteller<MyPanelData>(
		mountNode,
		"u-full",
		"mark",
	);

	mount(App, {
		target: scrollyData.mountNode,
		props: { panels: scrollyData.panels },
	});
});
