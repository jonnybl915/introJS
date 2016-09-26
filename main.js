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

var pTagSentenceExample = document.querySelector('.paragraphs')
var destinationElement = document.querySelector('h4 strong')
if (pTagSentenceExample.textContent.length > 40) {
  destinationElement.innerHTML = "This sentence is SOO Long!!!!"

} else {
  destinationElement.innerHTML = "Not too Long. Eat more green beans."
}

var btnElement = document.querySelector('button')
var containerElement = document.querySelector('.container')

var destroyEverything = function () {
  containerEl.innerHTML = "<h3><mark> I told you not to push<br>I told you not to push<br>I told you not to push<mark><h3>"
}
