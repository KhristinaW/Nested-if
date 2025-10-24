const prompt= require('prompt-sync')();


let nights = parseInt(prompt("How many nights are you staying? "));

let price = 100 * nights;
let total

let room = prompt("Pick a room type: Standard, Deluxe, Suite ")

if(room === "Standard")
{
    total = price
}
else if(room === "Deluxe")
{
    total = price + 50
}
else if(room === "Suite")
{
    total = price + 150
}
else
{
    console.log(room + " does not exist")
}

let season = prompt("What season will you be staying during? Peak, Regualar, Off-peak: ")
if(season === "Peak")
{
    total = (price * 0.5) + price
}
else if(season === "off-Peak")
{
    total = price * 0.2
}
else if(season === "Regualar")
{
    total = price
}
else
{
    console.log(season + " does not exist")
}

if(nights >= 7 && nights < 14)
{
    tital = price * 0.15
}
else if(nights >= 14)
{
    total = price * 0.25
}
else
{
    console.log(nights + " does not exist")
}

let loyalty = prompt("What is your loyalty status? None, Silver, Gold, Platinum ");
if(loyalty === "Silver")
{
    addon = 20 * nights
    total = addon + price;
    console.log("(Free Breakfast)")

}
else if(loyalty === "Gold")
{
    console.log("(Free Breakfast)")
    if(room === "Standard")
    {
        room = "Deluxe"
    }
    else if(room === "Deluxe")
    {
        room = "Suite"
    }
    else if(room === "Suite")
    {
        console.log("Extra loyalty points")
    }
}
else if(loyalty === "Platinum")
{
    total = price * 0.1
    console.log("(Free Breakfast & Free Parking)")

    
}
else
{
    console.log(loyalty + " does not exist")
}

console.log("Your final total for your stay is $" + total)





