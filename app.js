const colors = require('colors');
const argv = require('yargs').options({
    direccion: { alias: 'd', desc: "Dirección a la cual queremos obtener el clima", demand: true }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/** Obtiene clima de la ciudad */
const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLatLong(direccion);
        const temper = await clima.getClima(coord.lat, coord.lon);

        return `El clima de ${coord.direccion} es de ${temper}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err));