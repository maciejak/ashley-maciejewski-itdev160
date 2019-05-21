var getElement = function(id) {
  return document.getElementById(id);
}

//set timer to end when grades are due
var timerEnd = new Date("May 29, 2019 17:00:00").getTime();
var titleEl = getElement("title");
titleEl.textContent = "Semester End Countdown";

//code for the timer
var timer = setInterval(function(){
  let now = new Date().getTime();
  let countDown = timerEnd - now;
  //have these run on a loop until timerEnd
  if(countDown >= 0){
    //use Math.floor to round down float value to nearest integer
    //(milliseconds * seconds * minutes * hours)
    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((countDown % (1000 * 60)) / 1000);
    //display on page
    getElement("timer-days").innerHTML = days + "<span class='label'>DAY(S)</span>";

    //add a zero prefix to the time; only display last two digits of number string
    getElement("timer-hours").innerHTML = ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";
    getElement("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";
    getElement("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
  }
  else{
    getElement("timer").innherHTML = "You made it! The semester is over!";
  }
}, 1000);

//create list items
var aList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < aList.length; i++) {
  var span = document.createElement("SPAN");
  //unicode character for X
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  aList[i].appendChild(span);
}

// click close button to remove list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a check when clicking list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// create new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = getElement("myInput").value;
  var item = document.createTextNode(inputValue);
  li.appendChild(item);
  if (inputValue === '') {
    alert("Please input text.");
  } else {
    getElement("myList").appendChild(li);
  }
  getElement("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};
