alert("Turn Your Volumn Up, Please and Thank You!")

// ?class Game {
//     constructor(name, age, hunger, sleep, boredom) {
//         this.name = name;
//         this.age = age;
//         this.hunger = hunger;
//         this.sleep = sleep;
//         this.boredom = boredom;
//     }
// }

// class Tamagotchi extends Game {
//   constructor(name, age, hunger, sleep, boredom) {
//     super(name, age, hunger, sleep, boredom)
//     this.name = " ";
//     this.age = 0;
//     this.hunger = 1;
//     this.sleep = 1;
//     this.boredom = 1;
//   }
// }?

// *** A NOTE ***
// document.addEventListener("click", function() {
// *document* refers to the HTML in the DOM; 
// *aEL* is a method used to add an event
// *click* - the event the listener is listening for
// *function* is what gets executed when the click is triggered

// ***** NAMING PET *******

// Get the input and output elements
const petNameInput = document.getElementById("petName");
const outputElement = document.getElementById("output1");

// Add event listener to the submit button
document.getElementById("submitButton").addEventListener("click", function() {
  // Get the value from the input field
  const petName = petNameInput.value;
  
  // Display the submitted text in the output box
  outputElement.textContent = "Your pumpkin's name is: " + petName;
});

// ***** AGING *******

// Sets the variable so you can get the age
const ageLevel = document.getElementById("ageLevel");
let age = 1; // Initial age value

// Create an event listener for the submit button
document.getElementById("submitButton").addEventListener("click", function() {
  // The age of the pet is increased by 1
  age++;
  // It's being displayed in the "Age" box
  ageLevel.textContent = age;
});

// Using the 'setInterval' function to increase the age every 20 secs
setInterval(function() {
  age++;
  // Update the age displayed in the HTML
  ageLevel.textContent = age;
}, 5000);

// ?Having issues using the event listener to start the counter after the submit button has been clicked.?
// ?ChatGPT helped cleaned up my code but I am unsure as to why when I remove the value of "textContent", it breaks my code.?

// ******* EATING **********

const eatButton = document.getElementById("eatButton");
const eating = document.getElementById("eating");

eatButton.addEventListener("click", function() {
  document.body.style.backgroundImage =
  "url('/img/eating.avif')";
  eating.play();

  setTimeout(function() {
     document.body.style.backgroundImage = "url(/img/daytime_cem.avif)";
     document.querySelector('h1').style.color='black'
   }, 7000);
});

// ********* PLAYING ************

const playButton = document.getElementById("playButton");
const playing = document.getElementById("playing");

playButton.addEventListener("click", function() {

  document.body.style.backgroundImage =
  "url('/img/play_jack2.jpeg')";
  document.querySelector('h1').style.color='white';
  playing.play();

  setTimeout(function() {
    document.body.style.backgroundImage = "url(/img/daytime_cem.avif)";
    document.querySelector('h1').style.color='black'
  }, 7000);
});

// **** NIGHT TIME *****

  const sleepButton = document.getElementById("sleepButton");
  // Sets the variable so you can get the button

  const snoring = document.getElementById("snoring");
  //" "...get the audio

  //Adds the "click" event to the button
  sleepButton.addEventListener("click", function() {

    document.body.style.backgroundImage =
    "url('/img/pumpkin night.jpeg')";
    document.querySelector('h1').style.color='white';
    // Play the audio
    snoring.play();

    setTimeout(function() {
       document.body.style.backgroundImage = "url(/img/daytime_cem.avif)";
       document.querySelector('h1').style.color='black'
     }, 7000);
  });

