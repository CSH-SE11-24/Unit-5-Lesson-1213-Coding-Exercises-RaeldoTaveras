console.log("Script running")
// CODE ALONG
// Use querySelectorAll to select all the buttons
let button = document.querySelectorAll("button")

// Use a for loop to console log each of the buttons in the array
for(let i=0; i<button.length; i++){
  console.log(button[i])
}



// Use getElementsByClassName to select all the p tags under the buttons
let p = document.getElementsByClassName(color)

// Console log the length of the array to confirm you have all ten elements
console.log(p.length)

// Add an event listener to the first button (red), such that when you click it, all the p tags turn red
button[0].addEventListener("click",function(event){
  for(let i = 0;i<p.length;i++){
    p[i].style.color="red"
  }
})


// LESSON 12 CODING EXERCISES
// Task 1
// Set up similar event listeners for the green and blue buttons
button[1].addEventListener("click",function(event){
  for(let i = 0;i<p.length;i++){
    p[i].style.color="green"
  }
})


// Task 2
// Select the skunk button
button[2].addEventListener("click",function(event){
  for(let i = 0;i<p.length;i++){
    p[i].style.color="blue"
  }
})

// Use querySelectorAll to select all the images

let images = document.querySelectorAll("img")
// Add an event listener to the skunk button such that when you click it, all the images become skunk.webp
button[3].addEventListener("click",function(event){
  for(let i = 0;i<images.length;i++){
    images[i].src=skunk.webp
  }
})


// LESSON 13 CODING EXERCISES
// Task 1 
// Write a for loop that goes through every image

// In the for loop, add an event listener to each image such that when the mouse is over it, the width goes to 110%



// In the same for loop, add an event listener to each image such that when the mouse moves off it, the width goes back to 100%



// Task 2
// Set up the DOM manipulation flow such that when you click any of the p tags, the font family changes to "Indie Flower", cursive;




// Task 3
// Set up the DOM manipulation flow such that when move your mouse over any of the buttons, the background color changes to black and the text color changes to white. It should change back to normal when you move your mouse off it.




// Task 4 (Stretch)
// Re-write the code along/Task 1 code to have just 1 event listener for all 3 buttons to work correctly
// Hint: you may need to use an array to store colors to match buttons



