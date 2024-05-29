'use strict';
//var currentCharacter;
var currentCharacter = JSON.parse(localStorage.getItem('currentCharacter'));
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
if (myCharacters === null){
  myCharacters = [];
}

//Loops through each character in myCharacters and create a clickable element for each character
for (var i = 0; i < myCharacters.length; i++){
  var sidebar = document.getElementById('sidebar');
  var aTag = document.createElement('a');
  aTag.setAttribute('href','display.html');
  aTag.setAttribute('name', 'click');
  aTag.setAttribute('class', 'characters');
  aTag.setAttribute('id', i);
  aTag.innerHTML = myCharacters[i].name;
  sidebar.appendChild(aTag);
}

var aTags = [];
//Calls the handleSubmitClick function
function eventAdder (){
  aTags = document.getElementsByName('click');
  for (var i=0;i<aTags.length;i++){
    var a = aTags[i];
    a.addEventListener('click', handleSubmitClick);
  }
}
eventAdder();

//Retrieves the character object from the clicked id in myCharacters + Store current character in local storage with JSON
function handleSubmitClick(event) {
  // event.preventDefault();
  var currentTarget = event.target.id;
  currentCharacter = myCharacters[currentTarget];
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
}
