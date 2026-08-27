<script lang="ts">
	import type { Marker } from "./types.ts";
	import Stage from "./components/Stage.svelte";
	import Scrollyteller from "./components/BoundScrollyteller.svelte";

	/* Shared state */
	import { scroll } from "./stores/scroll.svelte";

	/* Component props */
	const { panels } = $props();

	/* Local state */
	let marker = $state<Marker>({ car: "falcon" });
</script>

<div class="app">
	<Scrollyteller {panels} bind:marker>
		<Stage car={marker?.car || "falcon"} />
	</Scrollyteller>
</div>

<svelte:head>
	<title>Hello world!</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<style lang="scss">
</style>
