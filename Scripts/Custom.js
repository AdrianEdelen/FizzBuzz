document.getElementById("fizzBuzz").addEventListener("click", () => {
    let fizzInp1 = document.getElementById("fizzInp1").value;
    let fizzInp2 = document.getElementById("fizzInp2").value;
    for (i = 1; i <= 100; i++) {
        if (i % fizzInp1 === 0) {
            document.getElementById("fizzPrint").innerHTML += `<br /> ${i} fizz`;
        }
        else if (i % fizzInp2) {
            document.getElementById("fizzPrint").innerHTML += `<br /> ${i} buzz`;
        }
        else {
            document.getElementById("fizzPrint").innerHTML += `<br /> ${i}`;
        }
    }

})