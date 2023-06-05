let target = document.querySelector("#dynamic");

//Select String
function randomString() {
    let stringArr = ["Enjoy Now!", "Do You Like Pizza?","How About Noodle?"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split(""); 

    return selectStringArr;
}

//Typing reset & Start typing
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// shift() : pull out first element from the array
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        // call back function
        // doing until the array length become 0
        setTimeout(function() {
            dynamic(randomArr);
        },80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// blink cursor
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);