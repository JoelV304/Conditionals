var x= prompt('Enter a number');
var y= prompt('Enter another number');
var z= prompt('Last one');

if(x>y && x>z){
  console.log(x + ' is the largest number');
  document.getElementById("number").innerHTML = x + ' is the largest number!';
}else if(y>x && y>z){
  console.log(y + ' is the largest number');
  document.getElementById("number").innerHTML = y + ' is the largest number!';
}else{
  console.log(z + ' is the largest number');
  document.getElementById("number").innerHTML = z + ' is the largest number!';
}