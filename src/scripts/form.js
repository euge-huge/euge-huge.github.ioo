const form = document.getElementById("contacts-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = Array.from(event.target.elements).map((element) => {
    return {
      name: element.name,
      value: element.value,
    };
  });

  data = data.filter((element) => {
    if (element.name) {
      return true;
    } else {
      return false;
    }
  });

  const formData = new FormData();

  data.forEach((element) => {
    formData.append(element.name, element.value);
  });

  console.log(formData);
});
