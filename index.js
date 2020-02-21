var NumberOfButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < NumberOfButtons; i++) {
  //Detecting Button Press
  document.querySelectorAll('.drum')[i].addEventListener('click', handleclick);
  //Detecting KeyBoard pressed using anonymous function
  document.addEventListener('keypress',function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}

//Detecting Button Press
function handleclick() {
  buttonClickOn = this.innerHTML;
  makeSound(buttonClickOn);
  buttonAnimation(buttonClickOn);
}

function makeSound(key){
  switch (key) {
    case "w":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "a":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeKeyOn = document.querySelector("."+currentKey);
  activeKeyOn.classList.add("pressed");

  setTimeout(function (){   //Time out function
    activeKeyOn.classList.remove("pressed");
  },100);
}
