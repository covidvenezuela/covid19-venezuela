<template>
  <div class="container">
    <div class="has-text-centered">
      <h1 class="is-size-2 title-map_h1">
        <strong class="has-text-danger">HISTORICO DIARIO</strong>
      </h1>
    </div>
    <div class="chart" ref="chartdiv"></div>
  </div>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)

export default {
  name: 'Chart',
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

    chart.paddingRight = 10

    // Set up data source
    chart.dataSource.url = '/covid19-venezuela/chart/2020-19-03.csv'
    chart.dataSource.parser = new am4core.CSVParser()
    chart.dataSource.parser.options.useColumnNames = true

    chart.exporting.menu = new am4core.ExportMenu()
    chart.exporting.menu.align = 'left'
    chart.exporting.menu.verticalAlign = 'bottom'

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'date'

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.minWidth = 35

    // Create COnfirmados
    let confirmados = chart.series.push(new am4charts.LineSeries())
    confirmados.dataFields.valueY = 'confirmados'
    confirmados.dataFields.categoryX = 'date'
    confirmados.name = 'Confirmados'
    confirmados.strokeWidth = 3
    confirmados.fill = am4core.color('#f14668')
    confirmados.stroke = am4core.color('#f14668')
    confirmados.bullets.push(new am4charts.CircleBullet())

    let sanados = chart.series.push(new am4charts.LineSeries())
    sanados.dataFields.valueY = 'sanados'
    sanados.dataFields.categoryX = 'date'
    sanados.name = 'Sanados'
    sanados.strokeWidth = 3
    sanados.fill = am4core.color('#00d1b2')
    sanados.stroke = am4core.color('#00d1b2')
    sanados.bullets.push(new am4charts.CircleBullet())

    let fallecidos = chart.series.push(new am4charts.LineSeries())
    fallecidos.dataFields.valueY = 'fallecidos'
    fallecidos.dataFields.categoryX = 'date'
    fallecidos.name = 'Fallecidos'
    fallecidos.strokeWidth = 3
    fallecidos.fill = am4core.color('#3298dc')
    fallecidos.stroke = am4core.color('#3298dc')
    fallecidos.bullets.push(new am4charts.CircleBullet())

    let activos = chart.series.push(new am4charts.LineSeries())
    activos.dataFields.valueY = 'activos'
    activos.dataFields.categoryX = 'date'
    activos.name = 'Activos'
    activos.strokeWidth = 3
    activos.fill = am4core.color('#48c774')
    activos.stroke = am4core.color('#48c774')
    activos.bullets.push(new am4charts.CircleBullet())

    confirmados.tooltipText = '{valueY.value}'
    sanados.tooltipText = '{valueY.value}'
    fallecidos.tooltipText = '{valueY.value}'
    chart.cursor = new am4charts.XYCursor()

    let scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(confirmados)
    chart.scrollbarX = scrollbarX

    chart.legend = new am4charts.Legend()
    chart.legend.useDefaultMarker = true
    let marker = chart.legend.markers.template.children.getIndex(0)
    marker.cornerRadius(12, 12, 12, 12)
    marker.strokeWidth = 2
    marker.strokeOpacity = 1
    marker.stroke = am4core.color('#ccc')
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>

<style>
.chart {
  width: 96%;
  height: 500px;
}
</style>
