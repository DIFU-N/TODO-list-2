let form = document.getElementById("form"),
    text = document.getElementById("type"),
    mtpost = document.getElementById("empty-posts"),
    posts = document.getElementById("posr"),
    indiviTask = document.getElementById("indivtask"),
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

let data = {};

acceptData = () => {
    data["texts"] = text.value;
    createPosts();
}

createPosts = () => {
    posts.innerHTML += 
    `
    <tr>
        <td>
            <h3 id="indivtask">
                ${data["texts"]}
            </h3>
        </td>
        <td>    
            <input type="button" onClick="edit(this)" id="editB"value="edit">
        <input type="button" onClick="del(this)" id="deleteB"value="delete">
        </td>
        <td>
            <input type="button" onClick="done()" id="doneB"value="done">
        </td>
    </tr>
    `;
}

del = (e) => {
    e.parentElement.parentElement.remove();
}

edit = (e) => {
    addNew();
    text.value = data["texts"];
    del(e);
}

done = () => {
    const completedTask = data["texts"];
    indiviTask.innerHTML = 
    `
    <del>${completedTask}</del>
    `;
}
addNew = () => {
    taskpop.style.visibility = "visible";
    taskpop.style.opacity = "1";
};

closeM = () => {
    mtpost.innerHTML = "";
    taskpop.style.visibility = "hidden";
    taskpop.style.opacity = "0";
}
