class state {
	constructor(value, updateFunction) {
		this.value = value
		this.updateFunction = updateFunction
	}

	read() {
		return this.value
	}

	update(value) {
		this.value = value
		this.updateFunction(value)
	}
}

export default state;