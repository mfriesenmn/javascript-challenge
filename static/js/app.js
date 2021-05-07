// from data.js
var tableData = data;


function populateTable(){
	var tableElem = document.getElementById("thetable");
	tableElem.innerHTML="";
	data.forEach(r => runfilter(r));
}


function addToTable(x){
	var tableElem = document.getElementById("thetable");
	var row = document.createElement('tr');
	row.innerHTML = `<td>${x.datetime}</td><td>${x.city}</td><td>${x.state}</td><td>${x.country}</td><td>${x.shape}</td><td>${x.durationMinutes}</td><td>${x.comments}</td>`;
	tableElem.appendChild(row)
}

function runfilter(x){
	//Use a rolling boolean to check
	//Could probably also replace "change to false and then just don't run at the end" with a null return statement to save computations
	var passAll = true
	
	stateEntry = document.getElementById("state").value.toLowerCase();
	//console.log(stateEntry)
	if (stateEntry != ""){
		if(x.state != stateEntry){passAll = false}
	}
	countryEntry = document.getElementById("country").value.toLowerCase();
	if (countryEntry == "usa"){countryEntry = "us";}
	if (countryEntry != ""){
		if(x.state != countryEntry){passAll = false}
	}
	
	cityEntry = document.getElementById("city").value.toLowerCase();
	if (cityEntry != ""){
		if(!x.city.includes(cityEntry)){
			passAll = false;
		}
	}
	
	shapeEntry = document.getElementById("shape").value;
	if(shapeEntry != "select"){
		if(x.shape != shapeEntry){
			passAll = false;
		}
	}
	
	startDateEntry = document.getElementById("fromdatetime").value;
	if(startDateEntry != ""){
		if(x.datetime < startDateEntry){
			passAll = false;
		}
	}
	
	endDateEntry = document.getElementById("todatetime").value;
	if(endDateEntry != ""){
		if(x.datetime > endDateEntry){
			passAll = false;
		}
	}
	
	if(passAll){
		addToTable(x)
	}
	

	
}

populateTable();
