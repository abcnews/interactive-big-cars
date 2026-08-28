<script lang="ts">
	import type { Marker } from "../types";
	import { cars } from "../graphics.svelte";

	const listOfCars = $derived(cars.values());

	type Props = Marker;

	const { car }: Props = $props();

	const current = $derived(cars.get(car));
</script>

<!-- Preload the SVG images -->
<svelte:head>
	{#each listOfCars as car}
		<link rel="preload" href={car.src} as="image" />
	{/each}
</svelte:head>

<div class="root">
	{#if typeof current !== "undefined"}
		<img class="car-illustration" src={current?.src} alt={current?.alt} />
	{:else}
		<div>Error: Car not found...</div>
	{/if}
</div>

<style lang="scss">
	.root {
		overflow: clip;
		aspect-ratio: 16/9;
		height: 100%;
		width: unset;
		max-width: 100%;
		@container (max-aspect-ratio:16/9) {
			// width: 100%;
			// height: auto;
		}
	}
	.car-illustration {
		transform: translateX(2%);
	}
</style>
