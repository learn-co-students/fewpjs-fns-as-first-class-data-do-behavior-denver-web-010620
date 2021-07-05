/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time1){
  if(time1 > 1:00 && time1 < 12:00){
    return "Good Morning";
  } else if(time1 > 12:00 && time1 < 5:00) {
    return "Good AfterNoon"
  } else {
    return "Good Evening"
  }
}

/* End Given Code, don't edit above here...*/
function displayMessage(greeting){
  const greetings = document.querySelector('#greeting')
 const theGreeting = document.createElement('div')
 theGreeting.innerText = greet()
 greetings.appendChild(theGreeting)



}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
