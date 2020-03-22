<template>
  <div class="container">
    <div id="chart" class="has-text-centered">
      <h1 class="is-size-2 title-map_h1">
        <strong class="has-text-danger">CONFIRMADOS Y SOSPECHOSOS</strong>
      </h1>
    </div>
    <div class="chart-cases" id="chartdivcases"></div>
  </div>
</template>

<script>
  import * as am4core from '@amcharts/amcharts4/core'
  import * as am4charts from '@amcharts/amcharts4/charts'
  import am4themes_animated from '@amcharts/amcharts4/themes/animated'
  import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz'
  // Themes begin
  am4core.useTheme(am4themes_animated)
  am4core.useTheme(am4themes_dataviz)
  // Themes end

  export default {
    name: 'ChartCases',
    mounted() {
      // Create chart instance
      var chart = am4core.create('chartdivcases', am4charts.XYChart)
      chart.maskBullets = false
      chart.numberFormatter.numberFormat = '#'

      const estados = require('~/static/map/estados.json')

      chart.data = estados

      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'estado'
      categoryAxis.renderer.grid.template.location = 0

      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis())
      valueAxis.renderer.inside = true
      valueAxis.renderer.labels.template.disabled = true

      // Modify chart's colors
      chart.colors.list = [am4core.color('#f14668'), am4core.color('#00d1b2')]
      // Create series
      function createSeries(field, name) {
        // Set up series
        var series = chart.series.push(new am4charts.ColumnSeries())
        series.name = name
        series.dataFields.valueX = field
        series.dataFields.categoryY = 'estado'
        series.sequencedInterpolation = true

        // Make it stacked
        series.stacked = true

        // Configure columns
        series.columns.template.width = am4core.percent(60)
        series.columns.template.tooltipText =
          '[bold]{name}[/]\n[font-size:14px]{categoryY}: {valueX}'

        // Add label
        var labelBullet = series.bullets.push(new am4charts.LabelBullet())
        labelBullet.label.text = '{valueX}'
        labelBullet.label.fill = am4core.color('#333')
        labelBullet.locationY = 0.5
        labelBullet.locationX = 0.5

        return series
      }

      createSeries('confirmados', 'Confirmados')
      createSeries('sospechosos', 'Sospechosos')

      // Create series for total
      var totalSeries = chart.series.push(new am4charts.ColumnSeries())
      totalSeries.dataFields.valueX = 'none'
      totalSeries.dataFields.categoryY = 'estado'
      totalSeries.stacked = true
      totalSeries.hiddenInLegend = true
      totalSeries.columns.template.strokeOpacity = 0

      // Legend
      chart.legend = new am4charts.Legend()
    },

    beforeDestroy() {
      if (this.chart) {
        this.chart.dispose()
      }
    }
  }
</script>

<style>
  .chart-cases {
    width: 96%;
    height: 800px;
  }
</style>
