const btnBookNow = document.getElementById("btn_bookNow");
const searchInput = document.getElementById("keywords");
const searchBtn = document.getElementById("search");

const fetchData = async () => {
  const url = "travel_recommendation_api.json";
  const seach = searchInput.value;
  console.log(seach);

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      let searchData = [];

      for (const key in data) {
        if (key.includes(seach)) {
          searchData.push(data[key]); // Retorna el valor de la clave que coincide parcialmente
        }
      }
      
    }
  } catch (error) {
    console.log(error);
  }
};

btnBookNow.addEventListener("click", fetchData);

searchInput.addEventListener("click", () => {
  searchInput.value = "";
});

searchBtn.addEventListener("click", fetchData);
