export function GetElFromFirstDiv() {
	var el = document.getElementsByTagName("div")[0]
	return el
}

export function GetElFromId(id) {
	var el = document.getElementById(id)
	return el
}

export function GetElFromFirstWithClass(className) {
	var el = document.getElementsByClassName(className)[0]
	return el
}

export function GetTitleEl() {
	var el = document.getElementsByTagName("title")[0]
	return el
}