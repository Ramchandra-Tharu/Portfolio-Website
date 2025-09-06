var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}

// Typewriter effect for dynamic titles
const titles = ["SOFTWARE DEVELOPER", "WEB DEVELOPER", "MERN STACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"];
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typeSpeed = 100; // Speed of typing
let deleteSpeed = 50; // Speed of deleting
let pauseTime = 1500; // Pause time after completing a word

function typewriterEffect() {
    const titleElement = document.getElementById("dynamic-title");
    if (!titleElement) return;

    const currentTitle = titles[currentTitleIndex];
    
    if (isDeleting) {
        // Deleting characters
        titleElement.textContent = currentTitle.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            setTimeout(typewriterEffect, 200); // Small pause before typing new word
            return;
        }
        setTimeout(typewriterEffect, deleteSpeed);
    } else {
        // Typing characters
        titleElement.textContent = currentTitle.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typewriterEffect, pauseTime); // Pause when word is complete
            return;
        }
        setTimeout(typewriterEffect, typeSpeed);
    }
}

// Start the typewriter effect when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById("dynamic-title");
    if (titleElement) {
        titleElement.textContent = ''; // Start with empty text
        setTimeout(typewriterEffect, 1000); // Start after 1 second
    }
});

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxTC67wYk9VzJ1P22E6PeYey5BAfrtD8oPE4zSwA6hhhzX0S34JBRsrOBKfhnKCOZyL/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For your response"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset() 
    })
    .catch(error => console.error('Error!', error.message))
})
