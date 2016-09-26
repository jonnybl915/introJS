document.querySelector('.title').innerHTML = "Welcome to JS"


var listOfNames = [
  "Phil",
  "Jill",
  "Hill",
  "Will",
  "Bill",
  "Gill"
]
var ulContainer = document.querySelector('ul')

for (var i = 0; i < listOfNames.length; i = i + 1) {
  ulContainer.innerHTML += "<li>" + listOfNames[i] +"</li>"
}
