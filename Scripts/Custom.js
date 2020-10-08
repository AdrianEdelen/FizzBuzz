document.getElementById("fizzBuzz").addEventListener("click", () => {
    document.getElementById("result").innerHTML = '';
    let userInpFizz = parseInt(document.getElementById("userInpFizz").value);
    let userInpBuzz = parseInt(document.getElementById("userInpBuzz").value);
    let result = "";
    if (isNaN(userInpFizz) || isNaN(userInpBuzz)) {
        document.getElementById("result").innerHTML = "You gotta put something there, bud!";
        return;
    } else {
        for (let i = 1; i <= 100; i++) {
            // determining whether or not we should place a fizz, buzz, or nothing after the number
            if ( i % userInpFizz === 0 && i % userInpBuzz === 0) {
                result = `${i} fizz buzz `;
            }else if (i % userInpFizz === 0) {
                result = `${i} fizz `;
            }else if (i % userInpBuzz === 0) {
                result = `${i} buzz `;
            }else {
                result = `${i} `;
            }
            //
            //This is supposed to call the typer function and print each number of result var individually
            //
            typer(result,i);
            //line break before starting the next loop
            
            
        }
       
        console.log(result.length);
        
        function typer(result,i) {
            
            setTimeout(function () {
                for (let i = 0; i < result.length; i++) {
                    document.getElementById("result").innerHTML += result[i];
                }
            }, 20 * i);
            document.getElementById("result").innerHTML += `<br />`;
        }
        

    }
})