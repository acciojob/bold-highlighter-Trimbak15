// get all the bold elements
const boldElements = document.querySelectorAll('strong');

function highlight() {
  // loop through each bold element and change its color to green
  for(let i=0; i<boldElements.length; i++) {
    boldElements[i].style.color = 'green';
  }
}

function return_normal() {
  // loop through each bold element and change its color back to black
  for(let i=0; i<boldElements.length; i++) {
    boldElements[i].style.color = 'black';
  }
}
