const axios = require('axios').default;


const getLatLong = async(dir) => {

    /** Formatea la dirección para manejar los espacios en los textos */
    const encodeUrl = encodeURI(dir);

    /** Crea una instancia de axios */
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '29d83c0875mshe8942aefd259157p10f5cajsn9c3fbe547b8f'
        }
    });

    /** Como axios retorna una promesa entonces lo trabajamos como tal 
     * get(), corresponde al metodo http GET
     */
    // instance.get()
    //     .then((res) => console.log(res.data.Results[0]))
    //     .catch(err => console.log('ERROR!!!: '.bgRed, err));

    /** CAMBIAMOS LO ANTERIOR PASA SIMPLIFICAR CON AWAIT */
    const res = await instance.get();

    if (res.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    // toma el primer valor
    const data = res.data.Results[0];
    return {
        direccion: data.name,
        lat: data.lat,
        lon: data.lon
    };
};


module.exports = { getLatLong };