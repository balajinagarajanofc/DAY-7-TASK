var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var countryData = JSON.parse(request.response);

    // Get all countries from the Asia continent/region using the filter function
    const asiaCountries = countryData.filter(
      (element) => element.region === "Asia"
    );
    console.log("Asia Countries:", asiaCountries);

    // Get all countries with a population of less than 200,000 using the filter function
    const lowPopulationCountries = countryData.filter(
      (element) => element.population < 200000
    );
    console.log("Low Population Countries:", lowPopulationCountries);

    // Print name, capital, and flag using the forEach function
    countryData.forEach((element) => {
      console.log(
        "Name:",
        element.name.common,
        "Capital:",
        element.capital,
        "Flag:",
        element.flags.svg
      );
    });

    // Print the total population of countries using the reduce function
    const totalPopulation = countryData.reduce(
      (acc, element) => acc + element.population,
      0
    );
    console.log("Total Population:", totalPopulation);

    // Print the country which uses US Dollars as currency
    const usDollarCountries = countryData.filter((element) => {
      return element.currencies && element.currencies.USD;
    });
    console.log("Countries using US Dollars:", usDollarCountries);
  } else {
    console.error("Error fetching country data. Status:", request.status);
  }
};