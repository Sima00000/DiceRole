var a =1;
var total1 = 0;
var total2 = 0;
function roll(){
  console.log(a);
  const randomNum = getRandomArbitrary(1, 6); 

  
if(a == 1){ 
  var first = document.querySelector('#p1');
  first.innerHTML = Math.round(randomNum);

  total1 = total1 + Math.round(randomNum);
  var firsttotal = document.querySelector('#total1');
  firsttotal.innerHTML = 'Team 1 score -->'+ " " + total1;
a=2;

} 
else if(a == 2){ 
  var second = document.querySelector('#p2')
  second.innerHTML = Math.round(randomNum);
  Math.round(randomNum);
  total2 = total2 + Math.round(randomNum);
  var totalsecond = document.querySelector('#total2');
  totalsecond.innerHTML = 'Team 2 score -->'+ " " + total2;

  a=1;
}
if(total1 >= 50 || total2 >= 50){
  a == 1;
  var first = document.querySelector('#p1');
  first.innerHTML = 0;

  var second = document.querySelector('#p2')
  second.innerHTML = 0;

  if(total1 >= 50){
    alert('Digit on dice' + " " + Math.round(randomNum) + " , " +'winner is team 1')
    console.log('winer 1')
  }else if(total2 >= 50){
    alert('Digit on dice' + " " + Math.round(randomNum)+ " , " +'winner is team 2')
    console.log('winer 2')
  }

  total1 = 0 ;
  total2 = 0;

  var totalsecond = document.querySelector('#total2');
  totalsecond.innerHTML = 'Team 2 score -->'+ " " + total2;

  var firsttotal = document.querySelector('#total1');
  firsttotal.innerHTML = 'Team 1 score -->'+ " " + total1;
 }

}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}