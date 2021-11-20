let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/6.jpg') {
      myImage.setAttribute ('src','images/4.jpg');
    } else {
      myImage.setAttribute ('src','images/6.jpg');
    }
}
