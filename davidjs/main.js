export default (mainEl, code, style) => {
	mainEl.innerHTML = code
	if (style) {
  	const styleEl = document.createElement('style');
  	styleEl.textContent = style;
  	document.head.append(styleEl);
	}
}