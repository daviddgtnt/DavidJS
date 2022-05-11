import { RenderPage, GetElFromFirstDiv, GetElFromId, GetElFromFirstWithClass, GetTitleEl, SetTitle, createEl, createSimpleEl, main, h1, h2, h3, p, span, div, br, GetAttributes, State } from "./davidjs/all.js"

var stateTest = new State("DavidJS", render)

function render() {
	var website = main(
	h1(stateTest.read())+
	h3("What is DavidJS?")+
	p("DavidJS is a JavaScript framework by DavidDGTNT. DavidJS has a page renderer, HTML generator, and CSS generator. You define your website in simple JavaScript syntax.")+
	h3("What does DavidJS do?")+
	p("DavidJS does all the simple tasks you expect a JavaScript framework to do. DavidJS will let you edit the page in its syntax. When you open the page, it will make the page and add it to the DOM (rendering).")+
	h3("Why does DavidJS exist?")+
	p("DavidJS exists because of another project by DavidDGTNT called LOLFramework, which is a PHP framework in one file that will read from other files to render your page. David thought it would be an interesting idea to try to make a framework in JavaScript too, so DavidJS was created.")+
	h3("Get started using DavidJS")+
	p("To get started with DavidJS, install it by cloning the GitHub repository to your development directory. We will make it simpler soon with an npx script and NPM package. You can use any server, but for this case we can just use the built in Node.js server, or Replit.com. Replit.com will host the website for you as you edit in the cloud, while Node.js will do it on your local computer. To start with Replit, open the GitHub repo in Replit. To start with Node.js, go to the folder of your cloned repo and run "+createEl("code", "npx http-server")+" and go to "+createEl("a", "localhost:8080", GetAttributes({'href': 'http://localhost:8080'}))+".")+
	p("Use the render function to create your website. This function will be run whenever the website needs to be rendered. This contains your DavidJS code, your CSS code, and any JavaScript code that needs to be run whenever something new needs rendered.")+
	createEl("button", "State example", GetAttributes({'id': 'stateEx'}))
)
	SetTitle("DavidJS")
	RenderPage(GetElFromFirstDiv(), website, "@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Source+Code+Pro&display=swap'); body { text-align: center; font-family: \"Roboto\", sans-serif; margin: 0; } h1 { margin: 0; color: lightblue; padding: 5px; background-color: #555555;")

	GetElFromId("stateEx").addEventListener('click', () => {
		if (stateTest.read() == "DavidJS") { 
			stateTest.update("DavidJS is the best JavaScript framework!")
		} else {
			stateTest.update("DavidJS")
		}
	})
}

render()