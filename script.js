const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

let user_range = prompt("Set your range? from 1 to what range??");
let random = Math.floor(Math.random() * user_range);

btn.addEventListener('click', () => {  
    let digit = eval(input.value), output = [];
    let start = 0, end = user_range;
    for(let a = 1; a <= user_range; a++){output.push(a);};
    if(digit > random){start = random;}
    else if(digit < random){end = random - 1;};

    let slice = output.slice(start, end);
    let division = slice[Math.floor(slice.length/2)];

    if(digit === random){
        alert("congratulation!! you did it!")
    }else if(digit >= division && digit > random){
        alert("it is Too High, try again");
    }else if(digit <= division && digit > random){
        alert("it closely high, try again")
    }else if(digit <= division && digit < random){
        alert("it is Too low, try again")
    }else if(digit >= division && digit < random){
        alert("it is closely low, try again")
    }

    
})

