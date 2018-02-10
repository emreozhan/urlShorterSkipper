console.log("emre content");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);

	//yt click
	//document.getElementById("logo-icon-container").click();

	//escob
	document.getElementById("btd").click();

}