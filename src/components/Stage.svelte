<script lang="ts">
	import type { Marker } from "../types";
	import falcon from "../assets/scrollyteller_fordfalcon.svg";
	import rav4 from "../assets/scrollyteller_rav4.svg";
	import everest from "../assets/scrollyteller_fordeverest.svg";
	import raptor from "../assets/scrollyteller_ford_raptor_ranger.svg";
	import ram from "../assets/scrollyteller_chevrolet_ram.svg";

	const cars = new Map([
		["falcon", { src: falcon, alt: "Ford Falcon" }],
		["rav4", { src: rav4, alt: "Toyota Rav4" }],
		["everest", { src: everest, alt: "Ford Everest" }],
		["raptor", { src: raptor, alt: "Ford Raptor" }],
		["ram", { src: ram, alt: "Chevrolet Ram" }],
	]);

	type Props = Marker;

	const { car }: Props = $props();

	const current = $derived(cars.get(car));
</script>

<!-- Preload the SVG images -->
<svelte:head>
	{#each cars.values() as car}
		<link rel="preload" href={car.src} as="image" />
	{/each}
</svelte:head>

<div class="root">
	{#if typeof current !== "undefined"}
		<img src={current?.src} alt={current?.alt} />
	{:else}
		<div>Error: Car undefined.</div>
	{/if}
</div>

<style lang="scss">
	.root {
		width: 100%;
	}
</style>
