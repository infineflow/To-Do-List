const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item}
    <button>X</button>
    `;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
        }

    )
    listItem.querySelector("button").addEventListener(
        "click",
        function () {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)

}