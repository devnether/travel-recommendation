const btnBookNow = document.getElementById("btn_bookNow");
const searchInput = document.getElementById("keywords");
const searchBtn = document.getElementById("search");
const clearBtn = document.getElementById("clear");

const fetchData = async () => {
  const url = "travel_recommendation_api.json";
  const search = searchInput.value;
  console.log("Search:", search);

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log("Data:", data);
      let searchData = [];

      for (const key in data) {
        if (key.includes(search)) {
          searchData.push(data[key]); // Retorna el valor de la clave que coincide parcialmente
        }
      }
      showTravelDestination(searchData[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
searchInput.addEventListener("click", () => {
  searchInput.value = "";
});
btnBookNow.addEventListener("click", fetchData);
clearBtn.addEventListener("click", () => {
  location.reload();
});

searchBtn.addEventListener("click", fetchData);

function showTravelDestination(arr) {
  let mainDiv = document.getElementById("main-container");
  let searchDiv = document.createElement("div");

  console.log(arr[0].name);
  for (let i = 0; i < arr.length; i++) {
    // Crear un nuevo contenedor para cada destino
    let destDiv = document.createElement("div");
    let header = document.createElement("h1");
    let body = document.createElement("p");
    let visitBtn = document.createElement("button");

    // Asigna contenido a los elementos
    header.innerText = arr[i].name;
    body.innerText = arr[i].description;
    visitBtn.innerText = "Visit";

    // Agregar evento al botón para que haga algo cuando se haga clic
    visitBtn.addEventListener("click", function () {
      alert("Visit " + arr[i].name);
    });

    // Añadir los elementos al contenedor `destDiv`
    destDiv.className = "destDiv";
    destDiv.appendChild(header);
    destDiv.appendChild(body);
    destDiv.appendChild(visitBtn);
    searchDiv.appendChild(destDiv);
    // Agregar `destDiv` al contenedor principal `mainDiv`
  }
  searchDiv.className = "searchDiv";
  mainDiv.appendChild(searchDiv);
}
