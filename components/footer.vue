<template>
  <footer id="footer" class="footer">
    <div class="container">
      <div id="date" class="has-text-centered">
        <h4><strong>Actualizado: {{ fecha.toLocaleDateString("es-ES", options) }} </strong></h4>
      </div>
      <div id="terminos" class="content has-text-centered">
        <hr />
        <h4><strong>Términos de uso</strong></h4>
        <p>
          Este repositorio de GitHub y sus contenidos en este documento,
          incluidos todos los datos, mapas y análisis, son de propiedad
          intelectual del equipo de Covidvenezuela, todos los derechos
          reservados, se proporcionan al público estrictamente con fines de
          investigación académica y educativa. El sitio web se basa en datos
          disponibles públicamente de múltiples fuentes, que no siempre están de
          acuerdo. El equipo de Covidvenezuela por la presente renuncia a todas
          y cada una de las representaciones y garantías con respecto al sitio
          web, incluida la precisión, la idoneidad para el uso y la
          comerciabilidad.
          <strong>Se prohíbe estrictamente confiar en el sitio web</strong> para
          obtener orientación médica o el uso del sitio web en el comercio.
        </p>
      </div>
      <div id="fuentes" class="content has-text-centered">
        <hr />
        <h4><strong>Fuentes</strong></h4>
        <p>
          <strong>Coronavirus COVID-19 </strong> Casos reportados por el
          <strong>Gobierno de Venezuela</strong> y extración datos globales para
          Venezuela del Center for Systems Science and Engineering (CSSE) at
          <strong
            ><a
              target="_blank"
              href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
              >Johns Hopkins University (JHU)</a
            ></strong
          ><br />
          <a target="_blank" href="http://www.minci.gob.ve/presidencial/"
            >Ministerio del Poder Popular para la Comunicación y la Información
            MippCI</a
          ><br />
          <a href="https://www.worldometers.info/coronavirus/"
            >worldometers | COVID-19 CORONAVIRUS OUTBREAK</a
          ><br />
          <a href="https://www.elnacional.com/venezuela/regimen-reporto-seis-nuevos-casos-de-covid-19//"
            >elnacional.com</a
          ><br />
          <hr />
        <h4><strong>Contacto</strong></h4>
          <a href="mailto:covidvenezuela@gmail.com">covidvenezuela@gmail.com</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
        return {
        options : { year: 'numeric', month: 'long', day: 'numeric', hour12 : true, hour:  '2-digit', minute: '2-digit', second: '2-digit' },
        fecha: new Date(this.$store.state.fecha)
        }
    }
  }
</script>

<style></style>
