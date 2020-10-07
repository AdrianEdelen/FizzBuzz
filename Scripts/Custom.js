document.getElementById("reverseButton").addEventListener("click", () => {
    let regex = /[\W_]/g;
    let userInput = document.getElementById("userInput").value;
    if (userInput === "") {
        document.getElementById("result").innerText = "You gotta write something bud.";
        return;
    }
    let userInputLowerReg = userInput.toLowerCase().replace(regex, '');
    let revInput = userInputLowerReg.split('').reverse().join('');

    if (revInput === userInputLowerReg) {
        document.getElementById("result").innerText = userInput + " is a palindrome!";
    } else {
        document.getElementById("result").innerText = userInput + " is not a palindrome!";
    }
})