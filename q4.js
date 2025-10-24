const prompt= require('prompt-sync')();

let item = prompt("What item do you want? ")
let item1 = true;
let item2 = false;
let item3 = true;
let item4 = false;
let price = 10
shipping = price + 15
item1 = "item1"
item2 = "item2"
item3 = "item3"
item4 = "item4"

if(item === item1|| item === item3)
{
    let pay = prompt("What is your payment method? PayPal or Credit:  ");

    if(pay === "Credit")
    {
        let card = parseInt(prompt("What year does your card expire? ")) ;

        if(card > 2025)
        {
            let country = prompt("Enter your country: ")

            if(country === "USA")
            {
                console.log("Processing.... Total is  $" + price)
            }
            else if(country === "Mexico" ||country === "Italy" ||country === "Canada" || country || "Thailand")
            {
                console.log("Checking if country is supported... ")
                console.log("Processing... Total is $" +  shipping)
            }
            else
            {
                console.log("Sorry! Your country is not supported!")
            }
        }
        else if(card <= 2025)
        {
            console.log("Invalid Credit Card")
        }

    
    }
    else if(pay === "Paypal")
    {
        let account = prompt("Is your account verified? ");

        if(account === "Yes" )
        {
            let country = prompt("Enter your country: ")

          if(country === "USA")
            {
                console.log("Processing.... Total is  $" + price)
            }
            else if(country === "Mexico" ||country === "Italy" ||country === "Canada" || country || "Thailand")
            {
                console.log("Checking if country is supported... ")
                console.log("Processing... Total is $" +  shipping)
            }  
        }
        else
        {
            console.log("Invalid Account")
        }
    }
    else
    {
        console.log("Invalid Payment Method")
    }
}
else if(item === item2 || item === item4)
{
    console.log("Out of Stock. ")
}
else
{
    console.log("Item does not exist")
}

