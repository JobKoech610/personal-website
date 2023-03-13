
//alert  when form is submitted(event).

const input = document.getElementById('send');
input.addEventListener('click', function() {
  alert('send-succesfully!');
});



//text transform

const text = document.querySelector(".quote-1");
const strText = text.textContent;
const splitText = strText.split(" "+" "); // split text by spaces
text.textContent = "";

for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span><i>" + " " + splitText[i] + "</i></span>";
}

let char = 0;
let timer = setInterval(onTick, 1000);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    if (char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

//onmouseover
function bigImg(x) {
    x.style.height = "180px";
    x.style.width = "270px";
  }
 
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "250px";
  }