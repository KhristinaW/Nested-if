const prompt= require('prompt-sync')();

let basePrem = 1000;
let age = parseInt(prompt("Enter your age: "))

if(age < 25 && age >= 16)
{
    let extra = prompt("Have you had any accidents at all? ")
    let premiumPlus = basePrem + 500
    if(extra === "Yes" || extra === "yes")
    {   
        let extraPlus = premiumPlus + 300
        if(extraPlus > 1500)
        {
            let cars = parseInt(prompt("How many cars do you have? "));
            if(cars > 1)
            {
                extraPlus = extraPlus  * 0.1
                console.log("Your total is $" + extraPlus)
            }
            else
            {
                console.log("Your total is $" + extraPlus)
            }

        }
        else
        {
            console.log("Your total is $" + extraPlus)
        }
    }
    else
    {
        console.log("Your total adds up to $" + premiumPlus)
    }
}
else if(age >= 25)
{
    extra = prompt("Have you had any accidents at all? ")
    let years = parseInt(prompt("Enter how many years you have been driving: "));
    if(years < 5)
    {
        premiumPlus = basePrem + 200
        console.log("Your total is $" + premiumPlus)
        
    }
    else if(years >= 5 && extra == "no")
    {
        premiumPlus = basePrem - 150
        console.log("Your total is $" + premiumPlus)
    }
    else if(years >= 5 && extra == "yes")
    {
        console.log("your total is $" + basePrem)
    }


}
else
{
    console.log("You are not old enough to drive!")
}