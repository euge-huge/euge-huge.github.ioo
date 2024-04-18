const input = document.getElementById("find-input");
const findBtn = document.getElementById("find-btn");
const weather = document.getElementById("weather");

findBtn.addEventListener("click", () => {
  const city = input.value;

  fetch(
    "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=806beb5915203ad98abf6097acc3ee72"
  )
    .then((response) => response.json())
    .then((data) => {
      const json = {
        lat: 52.2297,
        lon: 21.0122,
        timezone: "Europe/Warsaw",
        timezone_offset: 3600,
        data: [
          {
            dt: 1645888976,
            sunrise: 1645853361,
            sunset: 1645891727,
            temp: 9,
            feels_like: 276.44,
            pressure: 1029,
            humidity: 64,
            dew_point: 272.88,
            uvi: 0.06,
            clouds: 0,
            visibility: 10000,
            wind_speed: 3.6,
            wind_deg: 340,
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
              },
            ],
          },
        ],
      };

      const weatherElement = `<div class="container py-5 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-md-8 col-lg-6 col-xl-4">

                                        <div class="card" style="color: #4B515D; border-radius: 35px;">
                                            <div class="card-body p-4">

                                                <div class="d-flex">
                                                    <h6 class="flex-grow-1">${city}</h6>
                                                    <h6>${new Date().getHours()}:${new Date().getMinutes()}</h6>
                                                </div>

                                                <div class="d-flex flex-column text-center mt-5 mb-4">
                                                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${json.data[0].temp}°C </h6>
                                                    <span class="small" style="color: #868B94">${json.data[0].weather[0].main}</span>
                                                </div>

                                                <div class="d-flex align-items-center">
                                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span
                                                                class="ms-1"> ${json.data[0].wind_speed} km/h
                                                            </span></div>
                                                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span
                                                                class="ms-1"> ${json.data[0].humidity}% </span>
                                                        </div>
                                                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span
                                                                class="ms-1"> ${json.data[0].uvi}h </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                                            width="100px">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>`;

      weather.innerHTML = weatherElement;

      console.log(json);
    })
    .catch(() => {});
});
