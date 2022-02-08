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


// green button
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeGreen(){
    document.body.style.backgroundColor ='green';
}

// golden
const goldenButton = document.getElementById('make-golden-button');
  goldenButton.addEventListener('click', makeGoldenRod);

  function makeGoldenRod(){
    document.body.style.backgroundColor='goldenrod'
}

//

const hotpinkButton = document.getElementById('make-hotpink-button');
 hotpinkButton.addEventListener('click', function makePink(){
     document.body.style.backgroundColor='hotpink';
 })

 //
 const lightBlue = document.getElementById('make-light-button');
  lightBlue.addEventListener('click', function(){
      document.body.style.backgroundColor='lightblue'
  })

