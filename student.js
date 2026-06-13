function addStudent() {
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var course = document.getElementById("course").value.trim();

    if (name === "" || age === "" || course === "") {
        alert("Please fill in all fields.");
        return;
    }
}

let card=document.createElement("div");
card.classList.add("student-card");
card.innerHTML=`<h3>${name}</h3>
<p>Age: ${age}</p>
<p>Course: ${course}</p>`;
document.getElementById("student-list").appendChild(card);
<button class="delete-button">Delete</button>
let deleteButton = card.querySelector(".delete-button");
deleteButton.onClick= function() {
    card.remove();
    document.getElementById("student-list").appendChild(card);
    card.innerHTML=`<h3>${name}</h3>
    <p>Age: ${age}</p>
    <p>Course: ${course}</p>
    <button class="delete-button">Delete</button>`;
};