document.getElementById('activation').addEventListener('click', Begin)

let inputa = 0
let rannum = 0
let counter = 1

function Begin () {
  inputa = parseInt(inputa)
  rannum = parseInt(rannum)
  counter = parseInt(counter)
  
  rannum = Math.floor(Math.random() * 10) + 1
  alert(rannum)

  while (inputa != rannum) { 
   inputa = prompt('Please guess a number between 1 and 10')

    if (inputa > rannum) {
     alert('incorrect guess, please try again, the number is bigger than what you guessed')
   } else if (inputa < rannum) {  
     alert('incorrect guess, please try again, the number is smaller than what you guessed')
   }
  }

  if (inputa == rannum) { 
    alert('correct guess, congradulations')
  }
}
