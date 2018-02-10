console.log("background working");

chrome.browserAction.onClicked.addListener(buttonCLicked)

function buttonCLicked(tab){
	console.log(tab);
	
	let msg = {
		txt :"hello"
	}

	chrome.tabs.sendMessage(tab.id, msg)
 
}
console.log("background son");
