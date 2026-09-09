// Normal
import falcon from "./assets/Plain/scrollyteller_falcon.svg";
import rav4 from "./assets/Plain/scrollyteller_rav4.svg";
import everest from "./assets/Plain/scrollyteller_everest.svg";
import raptor from "./assets/Plain/scrollyteller_raptor.svg";
import ram from "./assets/Plain/scrollyteller_ram.svg";

// Dots
import dotsfalcon from "./assets/Bonnet/scrollyteller_dots_falcon.svg";
import dotsrav4 from "./assets/Bonnet/scrollyteller_dots_rav4.svg";
import dotseverest from "./assets/Bonnet/scrollyteller_dots_everest.svg";
import dotsraptor from "./assets/Bonnet/scrollyteller_dots_raptor.svg";
import dotsram from "./assets/Bonnet/scrollyteller_dot_ram.svg";

// Block height
import falconheight from "./assets/Colour/scrollyteller_colourblock_falcon.svg";
import rav4height from "./assets/Colour/scrollyteller_colourblock_rav4.svg";
import everestheight from "./assets/Colour/scrollyteller_colourblock_everest.svg";
import raptorheight from "./assets/Colour/scrollyteller_colourblock_raptor.svg";
import ramheight from "./assets/Colour/scrollyteller_ram_colourblock.svg";

// Other
import motherandchild from "./assets/Plain/scrollyteller_motherandchild.svg";
import dotsramheight from "./assets/Bonnet/scrollyteller_colourblock_dots_RAM.svg";

import { SvelteMap } from "svelte/reactivity";

export const cars = new SvelteMap([
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
	[
		"ramheightbonnet",
		{
			src: dotsramheight,
			alt: "Chevrolet Ram with dots at bonnet and height blocked out.",
		},
	],
]);
