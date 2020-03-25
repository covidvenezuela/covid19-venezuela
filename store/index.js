import Vuex from 'vuex'

import estadosJson from '~/static/status/status.json'
import iso3312 from '~/static/utils/iso3312_latinamerica.json'

//const status = require('~/static/status/status.json')

let datos = []

for (var i = 0; i < estadosJson.length; i++) {
  if (estadosJson[i]['Country/Region'] == 'Venezuela') {
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

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      dataNacional: datos,
      pais: status,
      fecha: datos[0]['Last Update']
    })
  })
}
export default createStore
