const ACCESS_KEY = "b5b68f77dd3d249dd97e78c11bd50db1";

const _retrieveWeatherForecastMockedData = () =>
  fetch("/data/weather-api-mocked-data.json")
    .then((res) => res.json())
    .catch((err) => console.log("Oh no", err));

const _retrieveWeatherForecastApiData = (coordinates) =>
  fetch(
    `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`
  )
    .then((res) => res.json())
    .catch((err) => {});

const retrieveWeatherForecastData = async (coordinates, isMocked) => {
  if (isMocked) {
    return await _retrieveWeatherForecastMockedData();
  }
  return await _retrieveWeatherForecastApiData(coordinates);
};
