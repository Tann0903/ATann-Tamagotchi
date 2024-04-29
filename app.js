// class Tamagotchi {
//     constructor (name, age) {
//         this.name = name;
//         this.age = 0;
//     }
// }

// Pet is going to be either continously walking but standing idle until something their name is selected and then when they are bored

//

let sleepButton = document.querySelector("#sleepButton");

sleepButton.addEventListener("click", () => {
  // why are we using an arrow function here?
  document.body.style.backgroundImage =
    "url('https://img.freepik.com/free-vector/pet-cemetery-night-animal-graveyard-with-tombstones-grave-tombs-with-cats-dogs-birds-souls-near-monuments-with-their-photos-full-moon-dark-starry-sky-cartoon-illustration_107791-5902.jpg')";
  document.querySelector('h1').style.color='white';
});

const snoring = document.getElementById("snoring");

sleepButton.addEventListener("click", () => {
  sound.play()
}
)