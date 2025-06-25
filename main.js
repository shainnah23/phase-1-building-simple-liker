// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // Select all heart elements
  const hearts = document.querySelectorAll(".like-glyph");

  // Add click listeners to each heart
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      // Simulate a server call
      mimicServerCall()
        .then(() => {
          // If heart is empty, make it full
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            // Otherwise, toggle it back to empty
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          // On error, show modal with message
          const modal = document.getElementById("modal");
          const message = document.getElementById("modal-message");
          modal.classList.remove("hidden");
          message.textContent = error;

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});



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
