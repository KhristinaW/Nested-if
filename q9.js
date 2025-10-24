const prompt= require('prompt-sync')();


let base = 50 * 12;
let member = prompt("Pick a membership type: Basic, Premium, VIP ");
let student = prompt("Are you a student? ")
let contract = prompt("Are you signing up for an annual contract? ")


if(student == "yes")
{
    let age = parseInt(prompt("How old are you? "))
    if(age < 25)
    {
        base = base * 0.2

    }

}

if(contract == "yes")
{
    base = base * 10
}

if(member === "Basic")
{
    console.log("Your total is $" + base)
}
else if(member === "Premium")
{
    base= base + 30
    console.log("Your total is $" + base + " (Group Classes Included)")
}
else if(member === "VIP")
{
    base = base + 70
    console.log("Your total is $" + base + " (Personal Trainer Included)")
}

if(member === "Premium" || member === "VIP" && contract === "Yes")
{
    console.log("You have earned a free gym bag!")
}
