<script lang="ts">
	import ford from "../assets/scrollyteller_fordfalcon.svg";
	import rav4 from "../assets/scrollyteller_rav4.svg";
	import everest from "../assets/scrollyteller_fordeverest.svg";

	const cars = new Map([
		["ford", ford],
		["rav4", rav4],
		["everest", everest],
	]);

	type Car = "ford" | "rav4" | "everest";

	const { car }: { car: Car } = $props();
</script>

<div class="root">
	<!-- <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1> -->
	{#if car === "ford"}
		<img src={ford} alt="Ford Falcon" />
	{:else if car === "rav4"}
		<img src={rav4} alt="Rav4" />
	{:else if car === "everest"}
		<img src={everest} alt="Ford Everest" />
	{/if}
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
