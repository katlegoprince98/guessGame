let btn = document.getElementById('btn');
let output = document.getElementById('output');

let number = [Math.floor(Math.random() * 5)];

btn.addEventListener('click', function(){
     let input = document.getElementById('userInput').value;
     if(input == number){
        output.innerHTML = `Congradulations, your number is ${number}`
     }else if(input < number){
        output.innerHTML = "Too low, guess again"
     };
     if(input > number){
        output.innerHTML = 'Your guess was too high, guess again'
     }

});
