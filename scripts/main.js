let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/4.jpg') {
      myImage.setAttribute ('src','images/6.jpg');
    } else {
      myImage.setAttribute ('src','images/4.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Пожалуста, укажите, как к вам обращаться: ');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Погружение в фентези мир, в который хочется верить! Верно, ' + storedName + '?';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Почему все так фанатеют от Ведьмака? Интересно, ' + storedName + '?';
}

myButton.onclick = function() {
  setUserName();
}
