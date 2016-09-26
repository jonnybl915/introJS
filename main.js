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

//String assignment to variable
var aGrtg = "Hey how are you?"

//basic math wtih JS
//tip calculator

var totalMealCost = ((20 * 1.08) * 1.20)

var calcMeal = function (menuCost) {
  var foodTax = .08
  var tip = .20
  return (menuCost * (1 + foodTax)) * (1 + tip)
}
var totalMealCost1 = menuCost(20)
var totalMealCost2 = menuCost(30)
var totalMealCost3 = menuCost(45)
calcMeal(33)
