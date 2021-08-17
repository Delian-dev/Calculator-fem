const screen = document.querySelector(".calc-screen");
let result = 0;
let initial = "0";

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
    rerender();
  }

function rerender(){
    screen.innerText = initial;
}  

function final(){
    document.querySelector(".calc-buttons").addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    });
}

final();