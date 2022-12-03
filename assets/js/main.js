var today = new Date();

function getYear() {
var year = today.getFullYear();
console.log(year)

document.getElementById("txtYear").innerHTML = year

}

getYear();