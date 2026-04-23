function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let del = document.createElement("span");
    del.textContent = "X";
    del.classList.add("delete");

    del.onclick = function() {
        li.remove();
    };

    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}