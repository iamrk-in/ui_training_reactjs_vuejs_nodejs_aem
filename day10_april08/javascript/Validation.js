function printError(elemId, hintMsg) {
	document.getElementById(elemId).innerHTML = hintMsg;
}

function validationForm() {
	var fullName = document.frm.fullName.value;
	var skills = [];
	var checkboxes = document.getElementsByName("skills[]");
	console.log(checkboxes);


	for(let i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked) {
			skills.push(checkboxes[i].value)
		}
	}
	console.log(skills);

	var fullNameErr = true;

	// validat fullName
	if(fullName == "") {
		printError("fullNameErr", "Please enter fullName!");
	} else {
		var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[.#@])[a-zA-Z.#@]{5,8}$/;
		if(regex.test(fullName) === false) {
			printError("fullNameErr", "Invalid fullName");
		} else {
			printError("fullNameErr", "");
			fullNameErr = false;
		}
  	}

  	if((fullNameErr) === true) {
  		return false;
  	} else {
  		var dataPreview = `You have entered the fullName: ${fullName}`;
  		if(skills.length) {
  			dataPreview += "skills: " + skills.join(" , ");
  		}
  		console.log(dataPreview);
  		return true;
  	}
}