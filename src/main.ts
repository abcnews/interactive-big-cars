import { mount } from "svelte";
import { whenDOMReady, whenOdysseyLoaded } from "@abcnews/env-utils";
import { selectMounts } from "@abcnews/mount-utils";
import { loadScrollyteller } from "@abcnews/svelte-scrollyteller";
console.log(loadScrollyteller);

import "./global.css";

import App from "./App.svelte";

export type MyPanelData = {
	panels: any
};

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

await whenDOMReady;
await whenOdysseyLoaded;

// const app = mount(App, {
// 	target: document.querySelector("#interactive")!,
// 	props: scrollyData
// });

// export default app;
