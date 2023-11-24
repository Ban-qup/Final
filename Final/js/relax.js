function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.createElement("li");
    element.innerText = data;
    element.className = "list-group-item";
    event.target.appendChild(element);

    // Hide the element in the "Characters" list
    const charactersList = document.getElementById('characters');
    const characters = charactersList.getElementsByTagName('li');
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].innerText === data) {
            characters[i].style.display = 'none';
            break;
        }
    }

    // Check if the order is correct
    const correctOrder = ['Goku', 'Naruto Uzumaki', 'Luffy Monkey D.'];
    const currentOrder = Array.from(document.getElementById('correct-order').children).map(item => item.innerText);

    if (currentOrder.length === 3){
        if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
            document.getElementById('result').innerText = 'Congratulations! You got it right!';
            updateChart(1, 1);
        } else {
            document.getElementById('result').innerText = 'Oops! The order is incorrect.';
            updateChart(1, 0);
        }
    }
}

function clearOrder() {
    const correctOrder = document.getElementById('correct-order');
    while (correctOrder.firstChild) {
        const item = correctOrder.firstChild;
        correctOrder.removeChild(item);
        document.getElementById('characters').appendChild(item);
        //item.style.display = 'block'; // Show the element in the "Characters" list

        // Reattach the ondragstart event handler
        item.setAttribute("draggable", "true");
        item.setAttribute("ondragstart", "drag(event)");
    }
    document.getElementById('result').innerText = '';
}

const homeButton = document.getElementById("home");

homeButton.addEventListener("click", function (){
    window.location.href = '../html/quiz.html';
});
