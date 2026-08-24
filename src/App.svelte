<script lang="ts">
	import Stage from "./components/Stage.svelte";
	import Portal from "svelte-portal";
	import Scrollyteller from "@abcnews/svelte-scrollyteller";
	import Alpine from "alpinejs";

	import { scroll } from "./stores/scroll.svelte";

	const { panels } = $props();

	let marker = $state<any>();
	let progress = $state();

	$inspect(marker);

	$effect(() => {
		window.Alpine = Alpine;
		Alpine.start();
	});
</script>

<div class="app">
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
			// resizeInteractive: false
			// transparentFloat: true
		}}
	>
		<Stage car={marker?.car || ""} />
	</Scrollyteller>
</div>

<svelte:window bind:scrollY={scroll.y} />

<style lang="scss">
</style>
