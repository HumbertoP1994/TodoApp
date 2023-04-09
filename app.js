const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
const ulEl = document.getElementById("ul-el")

console.log(inputEl)
console.log(buttonEl)
console.log(ulEl)

buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    const listItem = document.createElement("li")
    const todoText = inputEl.value;
    const textNode = document.createTextNode(todoText);
    listItem.appendChild(textNode);
    

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        listItem.classList.toggle("completed")
    })
    listItem.appendChild(checkbox)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        listItem.parentNode.removeChild(listItem)
    })

    listItem.appendChild(textNode)
    listItem.appendChild(deleteButton)

    ulEl.appendChild(listItem);
    inputEl.value = "";
})

