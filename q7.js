const prompt= require('prompt-sync')();

let bill= parseInt(prompt("Enter your bill total: "));
let tip = 0;
let rewards = prompt("Do you have an rewards card? ")

if(rewards === "yes" || rewards === "Yes")
{
    bill = bill *0.1
}
      
if(bill >50)
{
    let party = parseInt(prompt("How many people are in your party? "));
    if(party >= 6)
    {
        bill = (bill * 0.18)+ bill;
      
            console.log("Your total is $" + bill.toFixed(2))
        

    }
    else if(party < 6 && party > 0)
    {
       tip = parseInt(prompt("Enter your perferred tip: "))
       if( tip === "15%")
       {
        bill = (bill * 0.15) + bill
       
            console.log("Your total is $" + bill.toFixed(2))
        
       }
       else if(tip === "18%")
       {
        bill = (bill * 0.18) + bill
        
            console.log("Your total is $" + bill.toFixed(2))
        
       }
       else if( tip === "20%")
       {
        bill = (bill * 0.2) + bill
        
            console.log("Your total is $" + bill.toFixed(2))
        
       }
       else
       {
        console.log("That is not an option")
       }


    }
    
}
else if( bill <= 50)
{
    
    tip = prompt("Would you like to leave a 15% tip? ")
    if(tip === "yes" || tip === "Yes")
    {
        bill = (bill * 0.15) + bill
        console.log("Your total is $" + bill.toFixed(2))
    }
    else(
        console.log("Your total is $" + bill.toFixed(2))
    )
}