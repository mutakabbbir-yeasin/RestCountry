const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  //   console.log(countries[9]);
  const countrisHtml = countries.map((country) => getCountry(country));
  // console.log(countrisHtml[9]);
  const container = document.getElementById("countries");
  container.innerHTML = countrisHtml.join(" "); // arrayName.join("")--> cotation er vitore jai deoa hobe ta darai separate hobe. space dile space diye or comma dile comma diye separate hobe.
};

const getCountry = (country) => {
  const { name, flags } = country;
  return `
    
  <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}" >
  </div>
    
    
    `;
};

loadCountries();
