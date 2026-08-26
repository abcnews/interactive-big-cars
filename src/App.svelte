<script lang="ts">
	import Stage from "./components/Stage.svelte";
	import Scrollyteller from "@abcnews/svelte-scrollyteller";

	// Shared state
	import { scroll } from "./stores/scroll.svelte";

	// Component props
	const { panels } = $props();

	let marker = $state<any>();

	function onMarker(data: Record<string, any>) {
		marker = data;
	}
</script>

<div class="app">
	<Scrollyteller {panels} {onMarker}>
		<Stage car={marker?.car || "ford"} />
	</Scrollyteller>
</div>

<svelte:window bind:scrollY={scroll.y} />

<style lang="scss">
</style>
