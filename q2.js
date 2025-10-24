const prompt= require('prompt-sync')();


time = parseInt(prompt("What time is it? "));
age = parseInt(prompt("How old are you? "))
day = parseInt(prompt("What day of the week is it? "))

if(day == 1 || day == 7)
{
    if(time < 5  )
    {
        console.log("Your ticket is a total of $10");
        
    }
    else
    {
        console.log("Your ticket is a total of $15")
    }
    
}
else if(day >= 2 && day <=6)
{
    console.log("Your ticket is a total of $8")
}

if(age >=65){
    console.log("You are eligible for a 20% discount")
}