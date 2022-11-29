function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(() =>
       Math.floor(Math.random() * 6) + 1
   )
}

const getPercentage = (remainingHealth, maximumHealth) => 
   (100 * remainingHealth) / maximumHealth

function getDicePlaceholderHtml(diceCount) {
   return new Array(diceCount).fill(0).map(() =>
       `<div class="placeholder-dice"></div>`
   ).join("")
}
function getNewSide(diceCount) {
   return new Array(diceCount).fill(0).map(() =>
       `<div class="placeholder-dice"></div>`
   ).join("")
}

let dice = {
   1: `<div id="dice-one-side-one" class='side one'>
               <div class="dot one-1"></div>
           </div>`,
      2: `<div id="dice-one-side-two" class='side two'>
               <div class="dot two-1"></div>
               <div class="dot two-2"></div>
           </div>`,
      3: `<div id="dice-one-side-three" class='side three'>
               <div class="dot three-1"></div>
               <div class="dot three-2"></div>
               <div class="dot three-3"></div>
           </div>`,
     4: `<div id="dice-one-side-four" class='side four'>
               <div class="dot four-1"></div>
               <div class="dot four-2"></div>
               <div class="dot four-3"></div>
               <div class="dot four-4"></div>
           </div>`,
    5: `<div id="dice-one-side-five" class='side five'>
               <div class="dot five-1"></div>
               <div class="dot five-2"></div>
               <div class="dot five-3"></div>
               <div class="dot five-4"></div>
               <div class="dot five-5"></div>
           </div>`,
   6: `<div id="dice-one-side-six" class='side six'>
               <div class="dot six-1"></div>
               <div class="dot six-2"></div>
               <div class="dot six-3"></div>
               <div class="dot six-4"></div>
               <div class="dot six-5"></div>
               <div class="dot six-6"></div>
           </div>`,
}



export { getDiceRollArray, getDicePlaceholderHtml, getPercentage, dice }