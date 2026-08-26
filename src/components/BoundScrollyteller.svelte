<script lang="ts">
	import Scrollyteller from "@abcnews/svelte-scrollyteller";
	import type { Marker } from "../types";
	import type { Snippet } from "svelte";

	type Props = {
		panels: any;
		marker: Marker;
		children: Snippet;
	};

	let {
		panels,
		marker = $bindable<Marker>(),
		children,
	}: Props = $props();
</script>

<Scrollyteller {panels} onMarker={(data: Marker) => (marker = data)}>
	{@render children()}
</Scrollyteller>
