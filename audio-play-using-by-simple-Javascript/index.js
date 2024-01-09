
//js code start here

for(let i =0; i<=3; i++){
  document.querySelectorAll(".button")[i].addEventListener("click",function(){
      let text = this.innerHTML; //this return button value;
      console.log(`button ${text} is clicked`);
      myFunction(text); //calling function

      
  });
}

function myFunction (ratan){ //receved myFunction by name ratan;

  switch(ratan){
      case "a":
      var audio = new Audio('audio/a.mp3');
          audio.play();
             break;

      case "b":
      var audio = new Audio('audio/b.mp3');
          audio.play();
             break;

      case "c":
      var audio = new Audio('audio/c.mp3');
          audio.play();
             break;  
  }
  
}  //js code end ;



































