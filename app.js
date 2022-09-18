function generateRandomHex() {
    return Math.floor(Math.random() * 10);
}

function changeColor() {
    let box1 = document.getElementById("b1");
    let randomNum = "#" + generateRandomHex() + generateRandomHex() + generateRandomHex() + generateRandomHex() + generateRandomHex() + generateRandomHex();
    document.getElementById("b1").style.backgroundColor = randomNum;
    document.getElementById("paragraph").innerHTML = "Code for above color is : " + randomNum;
}
