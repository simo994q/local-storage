

function setName () {
    let name = {firstName: "Simon", lastName: "Nielsen"}
    localStorage.setItem("name", JSON.stringify(name))
};


function parseName () {
    let string = JSON.parse(localStorage.getItem("name"))
    console.log(string);
    document.getElementById('name').innerHTML = JSON.stringify(string)
};