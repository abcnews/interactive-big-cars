<script lang="ts">
	import ford from "../assets/scrollyteller_fordfalcon.svg";
	import rav4 from "../assets/scrollyteller_rav4.svg";
	import everest from "../assets/scrollyteller_fordeverest.svg";

	const cars = new Map([
		["ford", { src: ford, alt: "Ford Falcon" }],
		["rav4", { src: rav4, alt: "Rav4" }],
		["everest", { src: everest, alt: "Ford Everest" }],
	]);

	type Car = "ford" | "rav4" | "everest";

	const { car }: { car: Car } = $props();

	const current = $derived(cars.get(car));
</script>

<div class="root">
	<img src={current?.src} alt={current?.alt} />
</div>

<style lang="scss">
	.root {
		aspect-ratio: 16/9;
		height: 100%;
		width: unset;
		@container (max-aspect-ratio:16/9) {
			width: 100%;
			height: auto;
		}
	}
</style>
