function searchWeather() {
    const cityInput = document.getElementById('city-input');
    const nameOfCity = cityInput.value;
    const key = 'b5c3ba7bb4a045cb9b3152331251804'
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${nameOfCity}&aqi=no`;

    fetchData(url)
    
}
async function fetchData(url) {
    try {
      const response = await fetch(url); // Отправляем запро
      // response.ok = true/false
      if (!response.ok) { // Проверяем статус (200, 404 и т.д.)
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.current.temp_c);
      const span_temp_c = document.createElement('span');
      const span_cloud = document.createElement('span');
      const span_dewpoint_c = document.createElement('span');
      const span_humidity = document.createElement('span');
      const span_precip= document.createElement('span');
      const span_pressure = document.createElement('span');
      const span_wind_kph = document.createElement('span');

      span_temp_c.textContent = ': ' + data.current.temp_c;
      span_cloud.textContent = ': ' + data.current.cloud;
      span_dewpoint_c.textContent = ': ' + data.current.dewpoint_c;
      span_humidity.textContent = ': ' + data.current.humidity;
      span_precip.textContent = ': ' + data.current.precip_mm;
      span_pressure.textContent = ': ' + data.current.pressure_mb;
      span_wind_kph.textContent = ': ' + data.current.wind_kph;

      const temp = document.getElementById('temp');
      const cloud1 = document.getElementById('cloud1');
      const dewpoint1 = document.getElementById('dewpoint1');
      const humidity1 = document.getElementById('humidity1');
      const precip1 = document.getElementById('precip1');
      const pressure1 = document.getElementById('pressure1');
      const wind_kph1 = document.getElementById('wind_kph1');

      temp.appendChild(span_temp_c);
      cloud1.appendChild(span_cloud);
      dewpoint1.appendChild(span_dewpoint_c);
      humidity1.appendChild(span_humidity);
      precip1.appendChild(span_precip);
      pressure1.appendChild(span_pressure);
      wind_kph1.appendChild(span_wind_kph);
      return data;
    } catch (error) {
      console.error("Не удалось загрузить данные:", error);
    }
  }