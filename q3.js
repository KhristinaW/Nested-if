const prompt= require('prompt-sync')();

let years = parseInt(prompt("How many years of service do you have? "))
let bonus = 1000;
let role = prompt("Are you a head of department? ")
let rating = parseInt(prompt("What is your rating? "))



if(years >= 5)
{
    bonus = bonus * 0.5 + 1000;
    if(rating == 5 )
    {
        bonus = bonus + 2000
        console.log("You total bonus is $" + bonus );
    }
    else if(rating == 4 )
    {
        bonus = bonus + 1000
        console.log("Your total bonus is $" + bonus )
    }
    else if( rating <= 3 && rating > 0)
    {
        console.log("Your total bonus is $" + bonus + " (no additional bonus)")
    }
}
else if(years < 5)
{
    if(rating == 5)
    {
        bonus = bonus + 2000
        console.log("Your bonus is $" + bonus )
    }
    else{
        console.log("Your bonus is " + bonus + " (no additional bonus)")
    }
}
if(role === "Yes")
{
    bonus = bonus * 0.25 + 1000;
}
