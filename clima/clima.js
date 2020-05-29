const axios = require('axios').default;

const getClima = async(lat, lon) => {
    /** Llamada GET sin cabeceras */
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d6947f8ade5dea75d80edecc57080acd&units=metric`);
    return res.data.main.temp;
    // return {
    //     temp: datos.temp,
    //     tempMin: datos.temp_min,
    //     tempMax: datos.temp_max,
    //     presion: datos.pressure,
    //     humedad: datos.humidity
    // };
};

module.exports = { getClima }