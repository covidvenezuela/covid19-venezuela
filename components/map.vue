<template>
  <div class="container is-fullhd">
    <div id="chartdiv" ref="chartdiv"></div>
  </div>
</template>

<script>
  import * as am4core from '@amcharts/amcharts4/core'
  import * as am4maps from '@amcharts/amcharts4/maps'

  export default {
    name: 'Maps',
    mounted() {
      // Create map instance
      var chart = am4core.create('chartdiv', am4maps.MapChart)
      chart.geodataSource.url = '/covid19-venezuela/geojson/venezuela.json'

      // Set map definition
      chart.geodata = chart.geodataSource.url

      chart.exporting.menu = new am4core.ExportMenu()
      chart.exporting.menu.align = 'left'
      chart.exporting.menu.verticalAlign = 'bottom'

      // Set projection
      chart.projection = new am4maps.projections.Miller()

      // Create map polygon series
      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries())

      // Make map load polygon (like country names) data from GeoJSON
      polygonSeries.useGeodata = true

      // Configure series
      var polygonTemplate = polygonSeries.mapPolygons.template
      polygonTemplate.tooltipText = '{ESTADO}'
      polygonTemplate.fill = am4core.color('#bbbbbb')

      // Create hover state and set alternative fill color
      var hs = polygonTemplate.states.create('hover')
      hs.properties.fill = am4core.color('#3298dc')

      var label = chart.chartContainer.createChild(am4core.Label)
      label.text =
        'Caracas (9), Miranda (20), La Guaira (5), Aragua (2), Anzoátegui (2), Mérida (1), Cojedes (1), Apure (1) y Zulia(1)'
      label.fontSize = 18
      label.paddingBottom = 50
      label.align = 'center'
      label.fontWeight = 600
      label.y = am4core.percent(90)
      label.fill = am4core.color('#f14668')

      // Create image series
      var imageSeries = chart.series.push(new am4maps.MapImageSeries())

      var imageSeriesTemplate = imageSeries.mapImages.template
      var marker = imageSeriesTemplate.createChild(am4core.Sprite)
      marker.path =
        'M 122.75532,157.33277 A 24.000003,24.000016 0 0 1 98.755327,181.33273 24.000003,24.000016 0 0 1 74.755324,157.33277 24.000003,24.000016 0 0 1 98.755327,133.33271 24.000003,24.000016 0 0 1 122.75532,157.33277 Z'
      marker.width = 48
      marker.height = 48
      marker.nonScaling = true
      marker.tooltipText = '{title}'
      marker.horizontalCenter = 'middle'
      marker.verticalCenter = 'middle'
      marker.propertyFields.fill = 'color'
      marker.properties.strokeOpacity = 0
      marker.properties.fillOpacity = 0.5

      let hoverstate = marker.states.create('hover')
      hoverstate.properties.fill = '#b713a6'
      hoverstate.properties.fillOpacity = 1
      hoverstate.properties.stroke = am4core.color('#000000')
      hoverstate.properties.strokeOpacity = 0.8
      hoverstate.properties.index = 99

      // Add button home
      let button = chart.chartContainer.createChild(am4core.Button)
      button.padding(15, 15, 15, 15)
      button.align = 'right'
      button.marginRight = 15
      button.events.on('hit', function() {
        chart.goHome()
      })
      button.icon = new am4core.Sprite()
      button.icon.path =
        'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8'

      // Set property fields
      imageSeriesTemplate.propertyFields.latitude = 'latitude'
      imageSeriesTemplate.propertyFields.longitude = 'longitude'

      // Caracas (8), Miranda (17), La Guaira (5), Aragua (2), Anzoátegui (2), Mérida (1), Cojedes (1), Apure (1) Zulia(1) ?(1).
      imageSeries.data = [
        {
          title: 'Caracas 9 Casos',
          latitude: 10.4880104,
          longitude: -66.9791885,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Miranda 20 Casos',
          latitude: 10.2959803,
          longitude: -66.3534698,
          color: am4core.color('#ff0000')
        },
        {
          title: 'La Guaira 5 Casos',
          latitude: 10.5880104,
          longitude: -66.6791885,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Aragua 2 Casos',
          latitude: 10.2353497,
          longitude: -67.3911331,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Anzoátegui 2 Casos',
          latitude: 9.7362495,
          longitude: -64.6861801,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Mérida 1 Caso',
          latitude: 8.5897198,
          longitude: -71.1561127,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Cojedes 1 Caso',
          latitude: 9.6612396,
          longitude: -68.5826797,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Apure 1 Caso',
          latitude: 7.5878198,
          longitude: -67.4723587,
          color: am4core.color('#ff0000')
        },
        {
          title: 'Zulia 1 Caso',
          latitude: 10.6666298,
          longitude: -71.6124496,
          color: am4core.color('#ff0000')
        }
      ]

      // Add zoom control
      chart.zoomControl = new am4maps.ZoomControl()
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose()
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/all';

  #chartdiv {
    width: 100%;
    height: 90vh;
    margin: 0 auto;
    @include mobile {
      height: 400px;
    }
  }
</style>
