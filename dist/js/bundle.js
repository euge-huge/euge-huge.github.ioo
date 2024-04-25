const ageTitle=document.getElementById("age"),sections=(console.log(ageTitle),document.getElementsByClassName("section")),headings=(console.log(sections),document.getElementsByTagName("h4")),h4Heading=(console.log(headings),document.querySelector("h4")),h1Headings=(console.log(h4Heading),document.querySelectorAll("h1")),navigationList=(console.log(h1Headings),document.querySelector(".navigation__list")),newHeading=(console.log(navigation.childNodes),console.log(navigationList.children),"Новый заголовок!!!");h4Heading.innerText=newHeading,navigationList.children[0].innerText='<a href="#age">Навыки</a>';let isClciked=!(navigationList.children[0].innerHTML='<a href="https://ya.ru">Навыки</a>');function titleHovered(){isClciked=isClciked?(ageTitle.style.color=null,ageTitle.style.textAlign=null,!1):(ageTitle.style.color="red",ageTitle.style.textAlign="center",!0)}function titleUnhovered(){ageTitle.style.color=null,ageTitle.style.textAlign=null}ageTitle.addEventListener("click",titleHovered),ageTitle.addEventListener("mouseout",titleUnhovered);const form=document.getElementById("contacts-form");form.addEventListener("submit",e=>{e.preventDefault();let t=Array.from(e.target.elements).map(e=>({name:e.name,value:e.value}));t=t.filter(e=>!!e.name);const n=new FormData;t.forEach(e=>{n.append(e.name,e.value)}),console.log(n)});let name="Evgeniy",age=22,isAdmin=!0,isStudent=!1;const myFirstName="Evgeniy",student={name:"Student",age:19,isAdmin:!0},fruits=(console.log(student.name),["apple","orange","peech"]),ages=[5,10,18],mathScore=(console.log("Array length: "+fruits.length),console.log("First fruit: "+fruits[0]),80),russianScore=60,biologyScore=90,average=(mathScore+russianScore+biologyScore)/3,datOfTheWeek=(console.log(average),18<=student.age?console.log("Студент совершеннолетний!"):console.log("Студент не совершеннолетний!!!"),18!=student.age&&console.log("Студенту не 18 лет!"),console.log(!1),"Wednesday");switch(datOfTheWeek){case"Monday":console.log("Сегодня первый рабочий день!");break;case"Friday":console.log("Сегодня последний рабочий день!");break;default:console.log("Обычный день!")}for(let e=5;e<=student.age;e++)console.log("Age: "+e);let whileAge=15;for(;0<whileAge;)console.log("Age: "+whileAge),whileAge-=1;function y(e){return e+2}const value=y(8);function printStudentName(e){console.log(e)}console.log(value),printStudentName(student.name);const printStudentName2=e=>{console.log(e)};function functionWithCallback(e){console.log("Сейчас выполнится другая функция!!!"),e()}printStudentName2(student.name),functionWithCallback(()=>{console.log("Я другая функция")});const date=new Date,ctx=(console.log("Дата: "+date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()),new gridjs.Grid({columns:["Name","Email","Phone Number"],pagination:{limit:2},sort:!0,search:!0,data:[["John","john@example.com","(353) 01 222 3333"],["Mark","mark@gmail.com","(01) 22 888 4444"],["Eoin","eoin@gmail.com","0097 22 654 00033"],["Sarah","sarahcdd@gmail.com","+322 876 1233"],["Afshin","afshin@mail.com","(353) 22 87 8356"]]}).render(document.getElementById("table")),document.getElementById("myChart")),container=(new Chart(ctx,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),document.getElementById("myCarousel")),options={infinite:!0},input=(new Carousel(container,options),document.getElementById("find-input")),findBtn=document.getElementById("find-btn"),weather=document.getElementById("weather"),API_ID="3cbd79ec8f6d891a64ad1fc95d9718c5";findBtn.addEventListener("click",()=>{const t=input.value;fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=1&appid=`+API_ID).then(e=>e.json()).then(e=>{fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e[0].lat}&lon=${e[0].lon}&units=metric&appid=`+API_ID).then(e=>e.json()).then(e=>{e=`<div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-8 col-lg-6 col-xl-4">

                        <div class="card" style="color: #4B515D; border-radius: 35px;">
                            <div class="card-body p-4">

                                <div class="d-flex">
                                    <h6 class="flex-grow-1">${t}</h6>
                                    <h6>${(new Date).getHours()}:${(new Date).getMinutes()}</h6>
                                </div>

                                <div class="d-flex flex-column text-center mt-5 mb-4">
                                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${Number(e.main.temp).toFixed(0)}°C </h6>
                                    <span class="small" style="color: #868B94">${e.weather[0].main}</span>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="flex-grow-1" style="font-size: 1rem;">
                                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${e.wind.speed} km/h
                                            </span></div>
                                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${e.main.humidity}% </span>
                                        </div>
                                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span
                                                class="ms-1"> ${e.main.pressure}h </span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png"
                                            width="100px">
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>`;weather.innerHTML=e})})});