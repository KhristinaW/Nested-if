const prompt= require('prompt-sync')();
let deg = prompt("Do you have a educational degree? ");
let canidate

if(deg === "Yes" || deg ==="yes")
{
    let years = parseInt(prompt("How many years of experience do you have? "));
    if(years >= 2)
    {
        let cert = parseInt(prompt("How many certifications do you have?  "))
        if(cert > 0)
        {
            canidate = true
            console.log("Strong Canidate")
        }
        else
        {
            canidate = true;
            console.log("Qualified Canidate")
        }


    }
    else if( years < 2 && years >= 0)
    {
        canidate = false;
        console.log("Entry-level consideration")
    }
}
else
{
    canidate = false;
    console.log("Sorry, you are not qualified for this position")
}

if(canidate === true)
{
   let relocate =  prompt("Are you willing to relocate? ")
   if(relocate === "Yes" || relocate === "yes")
   {
    console.log("*Priority Review*")
   }
   else
   {
    console.log("We will contact you soon")
   }
   
}