//ex5a

//ex5b
function howmany() {
    let regformDiv= document.querySelector('#regForm');
    let countText = document.querySelectorAll('#regForm input[type=text]').length;
    alert("Total inputs: " + regformDiv.getElementsByTagName('input').length + ", Total text: " + countText);
}
//ex5c 
function colorChanger(chosenColor) {
    let color = chosenColor.value.toLowerCase();
    document.body.style.backgroundColor = color;
}

//ex5d


//ex5e
let text = document.querySelector("#changeText")
text.innerHTML = "I have changed!"