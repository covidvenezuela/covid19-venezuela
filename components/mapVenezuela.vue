<template>
  <div id="mapa" class="title-map">
    <div class="has-text-centered">
      <h1 class="is-size-2 title-map_h1">
        <strong class="has-text-danger">CASOS POR ESTADO</strong>
      </h1>
    </div>
    <div class="container is-fullhd">
      <div id="chartdiv" ref="chartdiv"></div>
    </div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'

export default {
  name: 'Venezuela',
  data() {
    return {
      totalPoints: this.$store.state.dataNacional
    }
  },
  mounted() {
    // Create map instance
    var chart = am4core.create('chartdiv', am4maps.MapChart)
    chart.geodataSource.url = '/covid19-venezuela/geojson/venezuela_hi.json'

    // Set map definition
    //chart.geodata = chart.geodataSource.url

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
    polygonTemplate.tooltipText = '{name}'
    polygonTemplate.fill = am4core.color('#bbbbbb')

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create('hover')
    hs.properties.fill = am4core.color('#3298dc')

    // Add button home
    let button = chart.chartContainer.createChild(am4core.Button)
    button.padding(15, 15, 15, 15)
    button.align = 'left'
    button.marginLeft = 15
    button.events.on('hit', function() {
      chart.goHome()
    })
    button.icon = new am4core.Sprite()
    button.icon.path =
      'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8'
    button.fill = am4core.color('#b713a6')

    // Create image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries())

    var imageSeriesTemplate = imageSeries.mapImages.template

    // Create Sprite circle
    var marker = imageSeriesTemplate.createChild(am4core.Sprite)
    marker.path =
      'M 122.75532,157.33277 A 24.000003,24.000016 0 0 1 98.755327,181.33273 24.000003,24.000016 0 0 1 74.755324,157.33277 24.000003,24.000016 0 0 1 98.755327,133.33271 24.000003,24.000016 0 0 1 122.75532,157.33277 Z'
    marker.width = 48
    marker.height = 48
    marker.nonScaling = true
    marker.tooltipText =
      '[bold]{Province/State}[/]\n [bold]{Confirmed}[/] Confirmado'
    marker.horizontalCenter = 'middle'
    marker.verticalCenter = 'middle'
    marker.properties.fill = '#f14668'
    marker.properties.strokeOpacity = 0.5
    marker.properties.fillOpacity = 0.5
    marker.properties.stroke = am4core.color('#b713a6')
    /*       marker.disabled = true
                                                                                                                                                                          marker.propertyFields.disabled = 'disabled' */

    // Create Label circle
    let label = imageSeriesTemplate.createChild(am4core.Label)
    label.text = '[bold]{Confirmed}[/]'
    label.horizontalCenter = 'middle'
    label.verticalCenter = 'middle'
    label.zIndex = 2
    label.fill = am4core.color('#FFF')
    label.strokeWidth = 1
    label.nonScaling = true
    /*       label.disabled = true
                                                                                                                                                                          label.propertyFields.disabled = 'disabled' */

    // Shadow
    let shadow = new am4core.DropShadowFilter()
    shadow.dx = 2
    shadow.dy = 2
    marker.filters.push(shadow)

    let hoverstate = marker.states.create('hover')
    hoverstate.properties.fill = '#b713a6'
    hoverstate.properties.fillOpacity = 1
    hoverstate.properties.stroke = '#000'
    hoverstate.properties.strokeOpacity = 0.8
    hoverstate.properties.index = 99
    hoverstate.transitionDuration = 100
    hoverstate.transitionEasing = am4core.ease.elasticInOut

    // Set property fields
    imageSeriesTemplate.propertyFields.latitude = 'Latitude'
    imageSeriesTemplate.propertyFields.longitude = 'Longitude'

    imageSeries.data = this.totalPoints

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
.amcharts-amexport-item {
  //border: 2px solid #777;
}

.amcharts-amexport-top .amcharts-amexport-item > .amcharts-amexport-menu {
  top: -3px !important;
  left: 2px;
  bottom: 40px !important;
}

.amcharts-amexport-menu-level-0.amcharts-amexport-bottom {
  top: auto;
  bottom: 40px !important;
}

.amcharts-amexport-item.amcharts-amexport-item-level-0 a {
  color: #b713a6;
}

.title-map {
  &_h1 {
    margin-top: 30px;
    margin-bottom: 20px;
    @include mobile {
      font-size: 1.6rem !important;
    }
  }
}
#chartdiv {
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  @include mobile {
    height: 400px;
  }
}
</style>
