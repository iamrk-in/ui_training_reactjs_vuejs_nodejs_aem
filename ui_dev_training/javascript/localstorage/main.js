alert("entered");

function store() {
	var firstName = document.getElementById("firstName").value;

	var user = {
		firstName: firstName,
	};

	window.sessionStorage.setItem("usr", JSON.stringify(user));
}

function retrieveData() {
	console.log("entered into retriev Data");
	var data = window.sessionStorage.getItem("usr");
	console.log(data);
	var para = document.createElement("p");
	var info = document.createTextNode(data);
	para.appendChild(info);
	var elem = document.getElementById("retrieve");
	elem.appendChild(para);
}

window.onload = function() {
	console.log("entered onload");
	document.getElementById("myFrm").onsubmit = store;
	document.getElementById("retrieveBtn").onclick = retrieveData;
}