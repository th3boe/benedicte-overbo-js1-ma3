//Q2: Make a call to the Rawg API.

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=2b2a2a2fb4a64fd3a573426bd98f2af2";

const theResultsContainer = document.querySelector(".results");

async function getInfo() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results.results;

    theResultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      console.log(data[i].raing);
      console.log(data[i].tags.length);
      if (i === 8) {
        break;
      }

      theResultsContainer.innerHTML += `<div class="result">
            <h2>${data[i].name}</h2>
            <p>Rating: ${data[i].rating}</p>
            <p>Tags: ${data[i].tags.length}</p>
            </div>`;
    }
  } catch (error) {
    console.log(error);
    theResultsContainer.innerHTML = "An error occured..";
  }
}

getInfo();
