function makeRed(){
    document.body.style.backgroundColor='red';
    document.body.style.color='white';
    document.body.style.textAlign='center';
    document.body.style.border='1px solid black';
    document.body.style.margin='10px ';
    document.body.style.padding='10px ';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}
