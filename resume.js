let myName = "Precious Kabamba";
console.log("Hello, my name is " + myName);

let education = "Oral Roberts University";
let experience = "Missions, debator, prayer movement";

document.getElementById("myName").textContent = myName;
document.getElementById("education").textContent ="Education :  " + education;
document.getElementById("experience").textContent ="Experience : " + experience;

let skills = ["HTML", "CSS", "JavaScript"];
let skillsList = document.createElement("ul");

for ( let i = 0 ; i < skills.length ; i++) {
    let li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}
document.body.appendChild(skillsList);
    function showFunFact() {
        alert("Fun Fact : I love Jesus!");
    }

