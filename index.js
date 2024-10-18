// projects=======================================
// projects=======================================

var a = 0;
var b = "./assets/icons/arrow_right.png";
async function fetchprojects() {
  try {
    const response = await fetch("./data/projects.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function projects_load(temp) {
  project_data = await fetchprojects();

  document.getElementById("projects-container").innerHTML = "";

  if (temp == 0) {
    project_length = 5;
  } else {
    project_length = project_data.length;
  }

  for (let j = 0; j < project_length; j++) {
    _scroll = "";
    project = document.createElement("div");
    project.className = "project";
    if (j == 4) project.id = "five";
    project.innerHTML = `<div class="project-image-container">
        <img src=${project_data[j].image} alt="" />
      </div>
      <div class="project-details-container">
        <div
          style="
            font-family: 'Lucida Sans', 'Lucida Sans Regular',
              'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
              sans-serif;
          "
        >
          ${project_data[j].name}
        </div>
        <div><a href=${project_data[j].link} target="_blank">Visit</a></div>
        <div style="font-family: 'poppinsl'; font-size: 12px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          mollitia.
        </div>
      </div>`;

    document.getElementById("projects-container").appendChild(project);
  }

  see_more = document.createElement("div");
  see_more.className = "project";
  see_more.addEventListener("click", () => {
    if (a == 0) {
      projects_load(1);
      a = 1;
      b = "./assets/icons/arrow_left.png";
    } else {
      projects_load(0);
      a = 0;
      b = "./assets/icons/arrow_right.png";
    }
    location.href = "#five";
  });

  see_more.innerHTML = `<img style = " height:16%;" src = ${b} alt = "see more"/>`;
  document.getElementById("projects-container").appendChild(see_more);
}
projects_load(0);

//skills======================================
//skills======================================

async function fetchskills() {
  try {
    const response = await fetch("./data/skills.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

async function skills_load() {
  skills_data = await fetchskills();

  for (let k = 0; k < skills_data.length; k++) {
    skill = document.createElement("div");
    skill.className = "skill";
    skill.innerHTML = `
            <img src= ${skills_data[k].icon} class="skill-image" />
            <p class="skill-name" alt="skills">${skills_data[k].name} </p>
          `;
    document.getElementById("skills-container-skill").appendChild(skill);
  }
}

skills_load();
