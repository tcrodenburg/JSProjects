const fetchD = document.querySelector(".fetchD");
const exercises = document.querySelector(".exercises");
const submitButton = document.querySelector(".ddSubmit");
let exerciseValue = "";

submitButton.addEventListener("click", () => {
  exerciseValue = exercises.options[exercises.selectedIndex].text.toLowerCase();
  getData(exerciseValue);
});

async function getData() {
  console.log(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseValue}`
  );

  //table api requests
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseValue}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecf1c37618msh89760f6122794b0p1638e7jsnb8bbdf42c1be",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json().then((data) => {
      let col = [];
      for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      //create table
      const table = document.createElement("table");

      //create table header row using the extracted headers above
      let tr = table.insertRow(-1);

      for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
      }

      //add json data to tables as rows
      for (let i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
          let tabCell = tr.insertCell(-1);
          tabCell.innerHTML = data[i][col[j]];
        }
      }

      //add the created table to a container
      const divShowData = document.querySelector(".outBox");
      divShowData.innerHTML = "";
      divShowData.appendChild(table);
    });
  } catch (error) {
    console.error(error);
  }
}
