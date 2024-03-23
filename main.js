// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function toggleHeart(heart) {
  const isFullHeart = heart.innerHTML.includes('&#x2665;'); // Check if heart is full
  heart.innerHTML = isFullHeart ? '&#x2661;' : '&#x2665;'; // Toggle heart
  heart.classList.toggle('activated-heart'); // Toggle the class for visual feedback
}

// Function to handle like/unlike click
function handleHeartClick() {
  mimicServerCall()
    .then(() => {
      toggleHeart(this); // 'this' refers to the clicked heart glyph
    })
    .catch((error) => {
      const modal = document.getElementById('modal');
      document.getElementById('modal-message').textContent = error;
      modal.classList.remove('hidden'); // Show the modal on error
      setTimeout(() => modal.classList.add('hidden'), 3000); // Hide after 3 seconds
    });
}

// Add event listeners to each like glyph
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', handleHeartClick);
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
