//COUNTER PROGRAM
const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

//increase button
increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

//decrease button
decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;
}

//reset button
resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}