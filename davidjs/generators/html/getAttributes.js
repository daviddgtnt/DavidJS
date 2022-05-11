export default (attributes) => {
	var toSend = ""
	Object.entries(attributes).forEach(entry => {
		const [attName, attValue] = entry
		toSend = toSend + " " + attName + "=" + "\"" + attValue + "\""
	})
	return toSend
}