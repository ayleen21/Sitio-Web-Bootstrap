// Accion del boton

var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },500);
};

var buttonContact = document.getElementsByClassName("buttonContact");

for (var i = 0; i < buttonContact.length; i++) {
buttonContact[i].addEventListener('click', animateButton, false);
}