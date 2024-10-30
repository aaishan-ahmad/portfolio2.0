var notes_index = 0;

async function load_software() {
  data = await fetch("./data/software.json");
  data = await data.json();
  console.log(data);

  //left side load
  document.getElementById("notes-left").innerHTML = "";
  document.getElementById("notes-right").innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    left_li = document.createElement("li");
    left_li.innerHTML = data[i].name;

    left_li.addEventListener("click", () => {
      notes_index = i;
      load_software();

      console.log(data[i].name);
    });
    document.getElementById("notes-left").appendChild(left_li);
  }
  for (let j = 0; j < data[notes_index].topics.length; j++) {
    note = document.createElement("div");
    note.className = "note";
    note.innerHTML = ` <img src="${data[notes_index].topics[j].cover}" alt=${data[notes_index].topics[j].name} class="note-image">
     `;

    note.addEventListener("click", () => {
      localStorage.setItem("note", data[notes_index].topics[j].link);
      localStorage.setItem("name", data[notes_index].topics[j].name);
      location.href = "./notepage.html";
    });

    document.getElementById("notes-right").appendChild(note);
  }
}

load_software();
