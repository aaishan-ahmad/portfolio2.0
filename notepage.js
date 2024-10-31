var chapter = 0;
var menu_status = false;

document.getElementById("note-menu-button").addEventListener("click", () => {
  console.log("ho");
  if (menu_status == false) {
    document.getElementById("note-menu").style.width = "45vw";
    menu_status = true;
  } else {
    document.getElementById("note-menu").style.width = "0";
    menu_status = false;
  }
});

async function loadnote() {
  console.log();
  const url = localStorage.getItem("note");
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const files = await response.json();

    // Filter out .md files and log their names
    const mdFiles = files
      .filter((file) => file.name.endsWith(".md"))
      .map((file) => file.name);
    document.getElementById("note-menu-chapters").innerHTML = "";
    document.getElementById("note-menu-header").innerHTML =
      localStorage.getItem("name");
    mdFiles.forEach((file, index) => {
      li = document.createElement("li");
      li.className = "note-menu-chapter";
      li.innerHTML = "- " + file.replace(".md", "");
      li.addEventListener("click", () => {
        chapter = index;
        console.log(index);
        loadnote();
      });
      document.getElementById("note-menu-chapters").appendChild(li);
      if (index == chapter) {
        // https://api.github.com/repos/ahsan-abc/notes/contents
        async function loadnotedata() {
          raw =
            "https://raw.githubusercontent.com/ahsan-abc/notes/main" +
            url.replace(
              "https://api.github.com/repos/ahsan-abc/notes/contents",
              ""
            ) +
            "/" +
            file.replaceAll(" ", "%20");
          notedata = await fetch(raw);
          const converter = new showdown.Converter();
          text = "# hello, markdown";
          html = converter.makeHtml(await notedata.text());
          document.getElementById("note-content-container").innerHTML = html;
          // await notedata.text();
        }
        loadnotedata();
      }
    });
  } catch (error) {
    console.error("Failed to fetch files:", error);
  }
}

loadnote();
