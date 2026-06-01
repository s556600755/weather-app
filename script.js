const cityInput = document.querySelector("#cityInput");

const searchBtn = document.querySelector("#searchBtn");

const weatherBox = document.querySelector("#weatherBox");

const city = "Tainan";

const apiKey = "eb813030715909e56055cfe899d7148d";

const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

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
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eb813030715909e56055cfe899d7148d`);

        const data = await response.json();

        console.log(data);


        weatherBox.innerHTML =
            "<p>資料載入中...</p>";
        await new Promise((resolve) => {

            setTimeout(resolve, 1000);

        });


        renderWeather(data)

        cityInput.value = ''
    } catch (error) {
        weatherBox.innerHTML =
            "<p>取得資料失敗</p>";

        console.error(error);
    }



}



function renderWeather(city) {

    weatherBox.innerHTML = `
    <h2>${city.name}</h2>

    <p>溫度：${city.main.temp}°C</p>

    <p>天氣：${city.weather[0].description}</p>
    <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png">
    
  `;
}