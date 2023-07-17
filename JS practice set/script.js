var input1 = document.getElementById('name');
let btn = document.getElementById('btn');



let arr = [];

btn.addEventListener('click', () => {
  var inputValue = input1.value;
  
  input1.value = ''
  var reverseString = inputValue.split('').reverse().join('');
  console.log(reverseString);
if (inputValue == reverseString) {
  document.getElementById('result').innerHTML = "The string is palindrome"
  console.log("it's palindrome");
}
else{
  document.getElementById('result').innerHTML = "The string is not palindrome"
  console.log("not match");
}


})
