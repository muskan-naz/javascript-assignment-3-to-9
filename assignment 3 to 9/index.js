// 1.Alert Chapter ***********
// Q #01
// What does the alert function do in JavaScript?

// // Answer:

// The alert() function in JavaScript displays a popup dialog box with a specified message and an "OK" button. It's typically used to show simple messages to the user, such as notifications or warnings.
// The user must click "OK" to close the dialog box and proceed with the rest of the page interaction.

// Here's an example:
alert("This is a message!");

// Q #02

alert("Welcome to my website!");
// Q #03
alert("muskan!");
// Q #04
alert("Hello World!");
// Q  #05
// Write a JavaScript alert statement with proper formatting and explain each part of the code.
// Here's a properly formatted `alert()` statement in JavaScript, along with an explanation of each part:
// ```javascript
// alert("Welcome to our website!");
// ```
// // ### Explanation of each part:
// // 1. **`alert`**:  
// //    This is the built-in JavaScript function that displays a message in a dialog box.
// // 2. **`(` (Opening Parenthesis)**:  
// //    This is the opening part of the function call, indicating that `alert` is being invoked with some arguments.
// // 3. **`"Welcome to our website!"`**:  
// //    This is the string that will be displayed inside the alert dialog box. Strings in JavaScript are enclosed in double (`"`) or single (`'`) quotes.
// // 4. **`)` (Closing Parenthesis)**:  
// //    This closes the function call.
// // 5. **`;` (Semicolon)**:  
// //    This marks the end of the statement. In JavaScript, semicolons are optional, but it's a good practice to use them to avoid potential issues in complex scripts.
// 2.Variables for Strings **********
// Q # 01
var message=("Hello,World!");
alert (message);
// Q # 02
var age;
alert (age);
age = 25;
alert(age); 
// Q # 03
var greeting = "Good Morning!";
alert(greeting);
greeting= "Good Evening!"
alert(greeting);
// Q #04
var favoriteColor = "blue"
alert("My favorite color is "  +  favoriteColor);
// 3.Variables for Numbers*************
// Q #01
var height = 170;
var newHeight = 170 + 10;
alert( newHeight);
// Q # 02
var num1 = 50;
var num2 = 30;
var sum = num1 + num2
alert(sum);
// Q # 03
var numToBeAdded =  20;
var total = numToBeAdded + 170
alert(total);
// Q # 04
var price = 120;
var tax = price * 10;
var totalPrice =  price + tax;
alert(totalPrice);
// 4.Variables for Numbers**************
// Q # 01
 var myAddress = "Karachi";
 alert(myAddress);
// Q # 02
var userName = "muskan ali  ";
var userEmail = "muskanasgharali123@gamil.com ";
var userPassword = "abc.123  ";
alert(userName  + userEmail + userPassword);
// Q # 03
var useraddress = ""
var userAddress = "Pakistan";
alert(userAddress)
// Q # 04
var rose = "Floribundas";
console.log(rose);
Rose = "Floribundas";
console.log(Rose);
// 5. Math  expressions : Familiar operators********
// Q #01
var num1 = 25;
var num2 =30;
var sum =  num1 + num2
alert(sum)
// Q # 02
var num1 = 25;
var num2 = 5;
var sum = num1 + num2
alert(sum);
// Q # 03
var modulusResult = 27 % 4;
alert(modulusResult);
// 6.Math expressions: Unfamiliar operators***************
// Q  # 01
var num = 3
var newNum = (num++)
alert(num)
alert (newNum)
// Q # 02
var counter = 10;
// var  newCounter = ++counter;
var newCounter = ++counter
alert(counter);
// Q # 03
var points = 20;
// (points--)
// alert(points)
(++points)
alert(points)
// Q # 04
var number = 0
var newNumber = ++number
var newNumber = ++number
var newNumber = ++number
alert(number)
// 7.Math expressions: Eliminating ambiguity*******
// Q #01;
var modulusOperator =  20 % 6
console.log(modulusOperator)
Output: 2
// Q # 02;
var expressionValue =  (6 + 2) * (5 - 3)
console.log(expressionValue)
// Q # 03;
// What is the value of finalTotal in the following expression, and how does operator
// precedence apply here?
var value1 = 25;
var value2 = 5;
console.log(value1 + value2);
console.log(value1 - value2);
console.log(value1 * value2);
console.log(value1 / value2);
// 8.Prompts
// Q # 01;
var userName = "muskan ali"
 var q = prompt("What is your name?");
alert( " Hello," + userName)
//  Q # 02;
var q = prompt("How old are you?")
var age = 20
    if (age =q){
        alert("you are " + age + " years old")
    }
    else{
        alert("no age provided")
    }
// Q #03
var p = prompt("How many pets do you have?")
var pets = "1,2,3,4,5,6,7,8,9,10";
  if( pets =p){
    alert("you have" + pets + " pets")
  }
 else{
    alert( "You didn't enter anything.")
 }
// Q # 04
 var abc = prompt( "Enter a number between 1 and 10");
 alert(abc * 2 )
// Q # 05
var q = prompt("What is your favorite number?")
var favNum = 7;
if (favNum = q) {
    alert(q)
}
else {
    alert(favNum=7)
}
// 9.if statements**********
// Q # 01
var a = prompt ("What is the capital of France?");
var b = "Paris";
if (a == b) {
    alert("Correct!");
    } 
else{
 alert("Try again!" + " Incorrect, the correct answer is Paris.")
}
// Q #02
var a = prompt ("What is the capital of the United Kingdom?")
var b = ("London")
var c = ( "The United Kingdom");
if (a == b){
    alert("Correct!");
}
else if(a == c) {
    alert("correct")
}
else{
    alert("Incorrect")
}
// Q # 03
//  Modify a script to keep track of a score. Start with a score of 0. Every
// time the user answers a question correctly, increment the score by 1 and display the updated
// score.
var score = 0;
var a = prompt("What is the capital of France?");
var b = "Paris";
if (a == b) {
    score = score + 1;
    alert("Correct! Your score is " + score);
}
else{
    alert("Incorrect")
}
// Q # 04
var q = prompt("What is the capital of Germany?")
var p = prompt("What is 10 + 10?")
var a = ("Berlin")
var b = ("20")
if (q == a && p == b){
    alert("You got both right!")
}
else if (q == a || p == b){
    alert("You got one correct!")
}
else{
    alert("You got none correct!")
}