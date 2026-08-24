<script lang="ts">
	import Stage from "./components/Stage.svelte";
	import Portal from "svelte-portal";
	import Scrollyteller from "@abcnews/svelte-scrollyteller";

	import { scroll } from "./stores/scroll.svelte";

	const { panels } = $props();

	let marker = $state(0);
	let progress = $state();
</script>

<div class="app">
	<Portal target="[data-key=stage]">
		<Stage />
	</Portal>
	<Scrollyteller
		{panels}
		onMarker={(data) => {
			marker = data;
		}}
		onProgress={(type, payload) => {
			progress = payload;
		}}
		layout={{
			align: "left",
			// resizeInteractive: true
			// transparentFloat: true
		}}
	>
		<div>Hello</div>
	</Scrollyteller>
</div>

<svelte:window bind:scrollY={scroll.y} />

<style lang="scss">
</style>
