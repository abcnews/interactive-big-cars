class Scroll {
	#y = $state(0) as number;
	get y() {
		return this.#y;
	}
	set y(value) {
		this.#y = value;
	}
}

export const scroll = new Scroll();
