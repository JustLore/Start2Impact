let apiKey = "edf80c8b107b9190ad93c86a329ec13e58f20c03";
let btn = document.getElementById("btn");
let geo = document.getElementById("geo");
let city = document.getElementById("city");
let aqi = document.getElementById("aqi");
let health = document.getElementById("health");

btn.onclick = function () {
  let location = document.getElementById("input").value;
  let uri = "https://api.waqi.info/feed/" + location + "/?token=" + apiKey;
  axios.get(uri).then((response) => {
    //check city
    if (response.data.data.city === undefined) {
      city.innerHTML = "Sorry, we cannot find your city!";
    } else if (response.data.data.city.name !== undefined) {
      let city_name = response.data.data.city.name;
      city.innerHTML = city_name;
    }
    //check data
    if (response.data.data.iaqi === undefined) {
      aqi.innerHTML = "n.d";
      health.innerHTML = "n.d";
      health.style.color = '#000';
      document.getElementById("info").style.visibility = "visible";
    }

    let air_quality = response.data.data.aqi;
    aqi.innerHTML = air_quality;
    let good = "Air quality is considered satisfactory";
    let moderate = "Air quality is acceptable";
    let mid = "Members of sensitive groups may experience health effects";
    let unhealthy = "Everyone may begin to experience health effects";
    let very_unhealthy = "Health warnings of emergency conditions";
    let poison = "Health alert";

    if (air_quality <= 50) {
      health.innerHTML = good;
      health.style.color = "#019701";
    } else if (air_quality > 50 && air_quality <= 100) {
      health.innerHTML = moderate;
      health.style.color = "#Eee710";
    } else if (air_quality > 100 && air_quality <= 150) {
      health.innerHTML = mid;
      health.style.color = "#f08903";
    } else if (air_quality > 150 && air_quality <= 200) {
      health.innerHTML = unhealthy;
      health.style.color = "#f30b3d";
    } else if (air_quality > 200 && air_quality <= 300) {
      health.innerHTML = very_unhealthy;
      health.style.color = "#790d79";
    } else if (air_quality > 300) {
      health.innerHTML = poison;
      health.style.color = "#8d0909";
    }
    document.getElementById("info").style.visibility = "visible";
  });
};

geo.onclick = function () {
  let uri = "https://api.waqi.info/feed/here/?token=" + apiKey;
  axios.get(uri).then((response) => {

    let city_name = response.data.data.city.name;
    city.innerHTML = city_name;

    let air_quality = response.data.data.aqi;
    aqi.innerHTML = air_quality;
    let good = "Air quality is considered satisfactory";
    let moderate = "Air quality is acceptable";
    let mid = "Members of sensitive groups may experience health effects";
    let unhealthy = "Everyone may begin to experience health effects";
    let very_unhealthy = "Health warnings of emergency conditions";
    let poison = "Health alert";

    if (air_quality <= 50) {
      health.innerHTML = good;
      health.style.color = "#019701";
    } else if (air_quality > 50 && air_quality <= 100) {
      health.innerHTML = moderate;
      health.style.color = "#Eee710";
    } else if (air_quality > 100 && air_quality <= 150) {
      health.innerHTML = mid;
      health.style.color = "#f08903";
    } else if (air_quality > 150 && air_quality <= 200) {
      health.innerHTML = unhealthy;
      health.style.color = "#f30b3d";
    } else if (air_quality > 200 && air_quality <= 300) {
      health.innerHTML = very_unhealthy;
      health.style.color = "#790d79";
    } else if (air_quality > 300) {
      health.innerHTML = poison;
      health.style.color = "#8d0909";
    }
    document.getElementById("info").style.visibility = "visible";
  });
};
