var targetElement = null;
		
const obj_name = document.getElementById('obj_name');

const createTarget = document.getElementById('createTarget');
const destroyTarget = document.getElementById('destroyTarget');
const moveToRed = document.getElementById('moveToRed');
const moveToGreen = document.getElementById('moveToGreen');
const moveToBlue = document.getElementById('moveToBlue');
const moveToYellow = document.getElementById('moveToYellow');


const div_red = document.getElementById('div_red');
const div_green = document.getElementById('div_green');
const div_blue = document.getElementById('div_blue');
const div_yellow = document.getElementById('div_yellow');

createTarget.addEventListener("click", createTargetHandler);
destroyTarget.addEventListener("click", destroyTargetHandler);
moveToRed.addEventListener("click", moveToRedHandler);
moveToGreen.addEventListener("click", moveToGreenHandler);
moveToBlue.addEventListener("click", moveToBlueHandler);
moveToYellow.addEventListener("click", moveToYellowHandler);


function createTargetHandler(){
	if(targetElement == null){
		createTarget.disabled = true;
		destroyTarget.disabled = false;
		targetElement = document.createElement("div");
		targetElement.setAttribute("id","target_element");
		targetElement.className = 'target';
		
		targetElement.innerHTML = obj_name.value;
		obj_name.value = "";
		div_red.append(targetElement);
		console.log("created");
	}
}

function destroyTargetHandler(){
	if(targetElement != null){
		createTarget.disabled = false;
		destroyTarget.disabled = true;
		targetElement.remove();
		targetElement = null;
		console.log("destroyTargetHandler");
	}
}

function moveToRedHandler(){
	if(targetElement != null){
		div_red.append(targetElement);
		console.log("moveToRedHandler");
	}
}

function moveToGreenHandler(){
	if(targetElement != null){
		div_green.append(targetElement);
		console.log("moveToGreenHandler");
	}
}

function moveToBlueHandler(){
	if(targetElement != null){
		div_blue.append(targetElement);
		console.log("moveToBlueHandler");
	}
}

function moveToYellowHandler(){
	if(targetElement != null){
		div_yellow.append(targetElement);
		console.log("moveToYellowHandler");
	}
}