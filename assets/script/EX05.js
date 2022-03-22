//ex5a

//ex5b
function howmany() {
    let regformDiv= document.querySelector('#regForm');
    let countText = document.querySelectorAll('#regForm input[type=text]').length;
    alert("Total inputs: " + regformDiv.getElementsByTagName('input').length + ", Total text: " + countText);
}
//ex5c 
function colorChanger() {
    var myVar = document.getElementById('mySelect').value;
    document.getElementById("color").style.backgroundColor = myVar;
}

//ex5d


//ex5e
