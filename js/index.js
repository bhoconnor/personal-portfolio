//Date variables
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

//Skills variables
const skills = ["JavaScript", "CSS", "HTML"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

//TEMP
console.log(skillsList);

//Copyright
copyright.innerHTML = "Brendan O'Connor " + thisYear;

//Append copyright to footer
footer.appendChild(copyright);

//for loop to show skills
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
