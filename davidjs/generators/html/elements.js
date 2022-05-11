function createEl(elName, insideHtml, attributes="") {
	return "<" + elName + " " + attributes + ">" + insideHtml + "</" + elName + ">"
}

function createSimpleEl(elName, attributes="") {
	return "<" + elName + " " + attributes + " />"
}

function main(insideHtml, attributes="") {
	return createEl("main", insideHtml, attributes)
}

function h1(insideHtml, attributes="") {
	return createEl("h1", insideHtml, attributes)
}

function h2(insideHtml, attributes="") {
	return createEl("h2", insideHtml, attributes)
}

function h3(insideHtml, attributes="") {
	return createEl("h3", insideHtml, attributes)
}

function p(insideHtml, attributes="") {
	return createEl("p", insideHtml, attributes)
}

function span(insideHtml, attributes="") {
	return createEl("span", insideHtml, attributes)
}

function div(insideHtml, attributes="") {
	return createEl("div", insideHtml, attributes)
}

function br(attributes="") {
	return createSimpleEl("br", attributes)
}

export { createEl, createSimpleEl, main, h1, h2, h3, p, span, div, br }