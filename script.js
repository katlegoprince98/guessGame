let btn = document.getElementById('btn');
let output = document.getElementById('output');

let number = [math.floor(Math.random() * 5)];

btn.addEventListener('click', function(){
     let input = document.getElementById('userInput').value;
     if(input == number){
        output.innerHTML = "You guessed correctly, your guessed number ${number}"
     }else if(input < number){
        output.innerHTML = "Too low, guess again"
     }

});