const cityInput = document.querySelector("#cityInput");

const searchBtn = document.querySelector("#searchBtn");

const weatherBox = document.querySelector("#weatherBox");

const weatherData = {

    台南: {
        temp: 30,
        description: "晴天"
    },

    台北: {
        temp: 26,
        description: "陰天"
    },

    高雄: {
        temp: 32,
        description: "多雲"
    }

};



searchBtn.addEventListener("click", () => {
    searchWeather()
}
);

async function searchWeather() {

    const city = cityInput.value.trim();
    if (!city) {

        weatherBox.innerHTML =
            "<p>請輸入城市名稱</p>";

        return;

    }
    weatherBox.innerHTML =
        "<p>資料載入中...</p>";
    await new Promise((resolve) => {

        setTimeout(resolve, 1000);

    });


    renderWeather(city)

    cityInput.value = ''

}



function renderWeather(city) {

    weatherBox.innerHTML = `
    <h2>${city}</h2>

    <p>溫度：${weatherData[city].temp}°C</p>

    <p>天氣：${weatherData[city].description}</p>
  `;
}