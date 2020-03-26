import Vuex from 'vuex'

import estadosJson from '~/static/status/status.json'
import iso3312 from '~/static/utils/iso3312_latinamerica.json'

// Cargando datos y filtrando por país, así como relacionando con el objeto de coordenadas

let datos = []

for (var i = 0; i < estadosJson.length; i++) {
  if (estadosJson[i]['Country/Region'] == process.env.country) {
    if (estadosJson[i].Confirmed != 0) {
      for (var j = 0; j < iso3312.length; j++) {
        if (iso3312[j]['Code'] == estadosJson[i]['ISO 3166-2 Code']) {
          estadosJson[i].Latitude = iso3312[j].Latitude
          estadosJson[i].Longitude = iso3312[j].Longitude
          datos.push(estadosJson[i])
        }
      }
    }
  }
}

/*
/* Se hacen las sumas de los datos del país
*/
let sumConfirmados = 0
let sumSanados = 0
let sumFallecidos = 0
let sumActivos = 0

let status = []

for (var i = 0; i < datos.length; i++) {
  sumConfirmados = sumConfirmados + Number(datos[i]['Confirmed'])
  sumSanados = sumSanados + Number(datos[i]['Recovered'])
  sumFallecidos = sumFallecidos + Number(datos[i]['Deaths'])
}

status.push({
  confirmados: sumConfirmados,
  sanados: sumSanados,
  fallecidos: sumFallecidos,
  activos: sumConfirmados - sumSanados - sumFallecidos
})

/*
/* Se cargan los datos del histórico diario
*/

import historicoJson from '~/static/chart/historicoToday.json'

console.log(status)
/*
/* Se crear el $storage
*/
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      dataNacional: datos,
      pais: status,
      fecha: datos[0]['Last Update'],
      historico: historicoJson
    })
  })
}
export default createStore
