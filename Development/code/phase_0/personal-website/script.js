
//alert  when form is submitted(event).

const input = document.getElementById('send');
input.addEventListener('click', function() {
  alert('send-succesfully!');
});



//text transform
const text = document.querySelector(".quote>h3");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>" + " " + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 500);

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
    x.style.height = "200px";
    x.style.width = "290px";
  }
 
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "250px";
  }