const input = document.getElementById("find-input");
const findBtn = document.getElementById("find-btn");
const weather = document.getElementById("weather");

const API_ID = "3cbd79ec8f6d891a64ad1fc95d9718c5";

findBtn.addEventListener("click", () => {
  const city = input.value;

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_ID}`
  )
    .then((response) => response.json())
    .then((coord) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0].lat}&lon=${coord[0].lon}&units=metric&appid=${API_ID}`
      )
        .then((response) => response.json())
        .then((json) => {
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
                                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${Number(
                                      json.main.temp
                                    ).toFixed(0)}°C </h6>
                                    <span class="small" style="color: #868B94">${
                                      json.weather[0].main
                                    }</span>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${
                                                  json.wind.speed
                                                } km/h
                                            </span></div>
                                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${
                                                  json.main.humidity
                                                }% </span>
                                        </div>
                                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${
                                                  json.main.pressure
                                                }h </span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://openweathermap.org/img/wn/${
                                          json.weather[0].icon
                                        }@2x.png"
                                            width="100px">
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>`;

          weather.innerHTML = weatherElement;
        });
    });
});
