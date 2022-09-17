let form = document.getElementById("form"),
    text = document.getElementById("type"),
    mtpost = document.getElementById("empty-posts"),
    posts = document.getElementById("posr"),
    taskHead = document.getElementById("taskHead"),
    taskpop = document.getElementById("myTask");
    // del = document.getElementById("deleteB");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("loki");
})

formValidate = () => {
    if (text.value === "") {
        mtpost.innerHTML = "stop the fooling";
    } else {
        taskpop.style.visibility = "hidden";
        taskpop.style.opacity = "0";
        mtpost.innerHTML = "";
        acceptData();
        text.value = "";
    }
}

let data = [{}];

acceptData = () => {
    data.push({
        taskValue: text.value    
    });
    console.log(data);

    localStorage.setItem("data", JSON.stringify(data));
    // taskValue = text.value;
    // data.task = taskValue;
    createPosts();
}

createPosts = () => {
    data.map((x,y) => {
        return posts.innerHTML += 
        `
        <tr id=${y}>
            <td>
                <h3 class="indivtask" >
                <span>${x.taskValue}</span>
                </h3>
            </td>
            <td>    
                <input type="button" onClick="edit(this)" class="editB"value="edit">
            <input type="button" onClick="del(this)" class="deleteB"value="delete">
            </td>
            <td>
                <input type="button" onClick="done()" class="doneB"value="done">
            </td>
        </tr>
        `; 
    });
    return data(x,y)
}

del = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(e.parentElement.parentElement.id);
    console.log(data);
}

edit = (e) => {
    let selectedTask = e.parentElement.previousElementSibling.firstElementChild.firstElementChild;
    addNew();
    text.value = selectedTask.innerHTML;
    del(e);
    console.log(selectedTask);
}

done = (e) => {
    // let indiviTask = document.querySelectorAll(".indivtask");
    let selectedCompletedTask = e.parentElement.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild;
    console.log(selectedCompletedTask);
    selectedCompletedTask.classList.toggle("completed");
    // console.log(indiviTask);
    // let taskString = JSON.stringify(data.task);
    // console.log(taskString);
    // indiviTask.innerHTML = 
    // `
    // <span style="text-decoration: line-through;">${taskString}</span>
    // `;
    // indiviTask.style.textDecoration = "line-through";
}
addNew = () => {
    taskpop.style.visibility = "visible";
    taskpop.style.opacity = "1";
};

closeM = () => {
    text.value = "";
    mtpost.innerHTML = "";
    taskpop.style.visibility = "hidden";
    taskpop.style.opacity = "0";
}
priority = () => {
    if (priority === "high") {
        priority.style.backgroundColor = "red";
    } else if (priority === "medium") {
        priority.style.backgroundColor = "yellow";
    } else {
        priority.style.backgroundColor = "green";
    }
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [{}]
    console.log(data);
    createPosts();
  })();