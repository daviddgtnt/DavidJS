import { GetTitleEl } from "./getel.js"

export default (newtitle) => {
	var titleEl = GetTitleEl()
	titleEl.innerHTML = newtitle
}