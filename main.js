// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
 	hideError()
  clickHeart()
});

function hideError() {
  let error = document.getElementById('modal')
  error.className = "hidden"
}

function clickHeart() {
  let heart = document.getElementsByClassName("like-glyph")
  Array.from(heart).forEach(button => button.addEventListener("click", (event) => {
    event.preventDefault()

    mimicServerCall("testurl")
      .then(response => {
        console.log("success")
          if (event.target.innerText === EMPTY_HEART){
            event.target.innerText = FULL_HEART
              console.log(event.target)
              event.target.className = "activated-heart"
          }
          else {
            event.target.innerText = EMPTY_HEART
            event.target.className = ""
          }
      })    
      .catch(error => {
        console.error(error)
        let errorModal = document.getElementById('modal')
        errorModal.className = "not-hidden"
        // errorModal.classList.remove("hidden")
        errorModal.innerText = error;
        setTimeout(() =>  errorModal.className = "hidden", 3000);
      })      
      })
  )}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
