const inputtext = document.getElementById('inputText');
const Pending = document.getElementById('Pending');

function addTask() {
    if (inputtext.value === '') {
        alert("Please enter a task");
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputtext.value;
        Pending.appendChild(li); // Fixed typo (capital 'P')

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputtext.value = "";
    saveData();
}

Pending.addEventListener("click", function (e) { // Removed extra closing parenthesis
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Moved saveData() here
    }
}, false);

function saveData() {
    localStorage.setItem("data", Pending.innerHTML);
}

function showTask() {
    Pending.innerHTML = localStorage.getItem("data");
}