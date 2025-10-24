const prompt= require('prompt-sync')();


let gpa = parseInt(prompt("Enter your current GPA:"));

if(gpa >= 3 )
{
    let sat = parseInt(prompt("Enter your SAT score: "))

    if(sat >= 1200)
    {
        let ec = prompt("Are you in any extracirriculars? ");

        if(ec === "yes" || ec === "Yes")
        {
            let role = prompt("What role are you in? ");

            if(role === "President" || role === "Vice President ")
            {
                console.log("Admitted with Honors")
            }
            else
            {
                console.log("Admitted")
            }
        }
        else if(sat >= 1400)
        {
            console.log("Admitted on probation")
        }
        else
        {
            console.log("Not admitted (No extracirrulars to subsitute qualification boost)")
        }
    }
    else{
        console.log("Not admitted (SAT score too low)")
    }
}
else
{
    console.log("Not admitted (GPA too low)")
}