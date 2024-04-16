fetch('http://www.boredapi.com/api/activity/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
});
