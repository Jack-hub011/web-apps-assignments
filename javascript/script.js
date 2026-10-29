function setGreeting() {
  let now = new Date(); // built in javascript
  console.log("i am printing time: " + now.getHours());

  let hour = now.getHours();
  let greeting;
  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  console.log(greeting);
  document.getElementById("greetingOutput").textContent = greeting;

}

window.onload = function() {
  setGreeting();

};

function setButtonText(){
  document.getElementById("buttonclickText").textContent = "Hello world! - t minus 12s before you get reduced to atoms...";
}


function setButtonTalk(){
  document.getElementById("date").textContent = new Date().toDateString();
}

function setButtonSpeech(){
let now = new Date();
document.getElementById("time").textContent = "current time " + now.toLocaleTimeString();
}

function addNumbers(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);



    document.getElementById("sumOutput").textContent = "Sum: " + result;
}

function getTextLength(){
    let text = document.getElementById("text").value;
    document.getElementById("textLength").textContent = "Text Length: " + text.length;
}
  
  function togglePassword(){
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  } 



  function changeFont() {
    let fontExample = document.getElementById("fontExample");
    fontExample.style.fontSize = "24px";
    fontExample.style.color = "blue";
  }