const inputField = document.getElementById("inputField")
const buttonEl = document.getElementById("button-el")
const ulEl = document.getElementById("ul-el")

buttonEl.addEventListener("click", function () {
    const newList = document.createElement("li")
    const todoText = inputField.value.trim();
    const textNode = document.createTextNode(todoText);
    newList.appendChild(textNode)

    if (todoText === "") {
        alert("Please enter a task");
        return;
    }

    const checkbox = document.createElement("inpuT");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        newList.classList.toggle("completed")
    })
    newList.appendChild(checkbox)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        newList.parentNode.removeChild(newList)
    })

    newList.appendChild(textNode)
    newList.appendChild(deleteButton)
    ulEl.appendChild(newList)
    inputField.value = "";
})