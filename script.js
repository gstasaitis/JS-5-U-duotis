var $button2 = document.querySelector('.increment-btn2');
var $counter2 = document.querySelector('.counter2');

$button2.addEventListener('click', function(){
  $counter2.value = parseInt($counter2.value) + 1;
}, false);

var $button = document.querySelector('.increment-btn');
var $counter = document.querySelector('.counter');

$button.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) + 1; 
}, false);


function clearResult(){
  document.getElementsByClassName("counter")[0].value = '0'
  document.getElementsByClassName("counter2")[0].value = '0'
}


