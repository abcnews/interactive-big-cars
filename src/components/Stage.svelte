<script lang="ts">
	import type { Marker } from "../types";

	// Normal
	import falcon from "../assets/scrollyteller_falcon.svg";
	import rav4 from "../assets/scrollyteller_rav4.svg";
	import everest from "../assets/scrollyteller_everest.svg";
	import raptor from "../assets/scrollyteller_raptor.svg";
	import ram from "../assets/scrollyteller_ram.svg";

	// Dots
	import dotsfalcon from "../assets/scrollyteller_dots_falcon.svg";
	import dotsrav4 from "../assets/scrollyteller_dots_rav4.svg";
	import dotseverest from "../assets/scrollyteller_dots_everest.svg";
	import dotsraptor from "../assets/scrollyteller_dots_raptor.svg";
	import dotsram from "../assets/scrollyteller_dot_ram.svg";

	// Block height
	import falconheight from "../assets/scrollyteller_falcon_colourblock.svg";
	import rav4height from "../assets/scrollyteller_colourblock_rav4.svg";
	import everestheight from "../assets/scrollyteller_colourblock_everest.svg";
	import raptorheight from "../assets/scrollyteller_colourblock_raptor.svg";
	import ramheight from "../assets/scrollyteller_ram_colourblock.svg";

	// Other
	import motherandchild from "../assets/scrollyteller_motherandchild.svg";

	import { SvelteMap } from "svelte/reactivity";

	const cars = new SvelteMap([
		[
			"falcon",
			{
				src: falcon,
				alt: "Ford Falcon.",
			},
		],
		[
			"rav4",
			{
				src: rav4,
				alt: "Toyota Rav4.",
			},
		],
		[
			"everest",
			{
				src: everest,
				alt: "Ford Everest.",
			},
		],
		[
			"raptor",
			{
				src: raptor,
				alt: "Ford Raptor.",
			},
		],
		[
			"ram",
			{
				src: ram,
				alt: "Chevrolet Ram.",
			},
		],
		// Dots
		[
			"falconbonnet",
			{
				src: dotsfalcon,
				alt: "Ford Falcon with dots at bonnet.",
			},
		],
		[
			"rav4bonnet",
			{
				src: dotsrav4,
				alt: "Toyota Rav4 with dots at bonnet.",
			},
		],
		[
			"everestbonnet",
			{
				src: dotseverest,
				alt: "Ford Everest with dots at bonnet.",
			},
		],
		[
			"raptorbonnet",
			{
				src: dotsraptor,
				alt: "Ford Raptor with dots at bonnet.",
			},
		],
		[
			"rambonnet",
			{
				src: dotsram,
				alt: "Chevrolet Ram with dots at bonnet.",
			},
		],
		// Block
		[
			"falconheight",
			{
				src: falconheight,
				alt: "Ford Falcon with height blocked out.",
			},
		],
		[
			"rav4height",
			{
				src: rav4height,
				alt: "Toyota Rav4 with height blocked out.",
			},
		],
		[
			"everestheight",
			{
				src: everestheight,
				alt: "Ford Everest with height blocked out.",
			},
		],
		[
			"raptorheight",
			{
				src: raptorheight,
				alt: "Ford Raptor with height blocked out.",
			},
		],
		[
			"ramheight",
			{
				src: ramheight,
				alt: "Chevrolet Ram with height blocked out.",
			},
		],
		// Other
		[
			"motherandchild",
			{
				src: motherandchild,
				alt: "Mother and Child.",
			},
		],
	]);

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
