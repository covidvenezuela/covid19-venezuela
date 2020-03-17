<template>
  <div class="chart" ref="chartdiv"></div>
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
    chart.dataSource.url = '/covid19-venezuela/chart/2020-17-03.csv'
    chart.dataSource.parser = new am4core.CSVParser()
    chart.dataSource.parser.options.useColumnNames = true

    chart.exporting.menu = new am4core.ExportMenu()
    chart.exporting.menu.align = 'right'
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
    confirmados.fill = am4core.color('#3298dc')
    confirmados.stroke = am4core.color('#3298dc')
    confirmados.bullets.push(new am4charts.CircleBullet())

    let sanados = chart.series.push(new am4charts.LineSeries())
    sanados.dataFields.valueY = 'sanados'
    sanados.dataFields.categoryX = 'date'
    sanados.name = 'Sanados'
    sanados.strokeWidth = 3
    sanados.fill = am4core.color('#48c774')
    sanados.stroke = am4core.color('#48c774')
    sanados.bullets.push(new am4charts.CircleBullet())

    let fallecidos = chart.series.push(new am4charts.LineSeries())
    fallecidos.dataFields.valueY = 'fallecidos'
    fallecidos.dataFields.categoryX = 'date'
    fallecidos.name = 'Fallecidos'
    fallecidos.strokeWidth = 3
    fallecidos.fill = am4core.color('#f14668')
    fallecidos.stroke = am4core.color('#f14668')
    fallecidos.bullets.push(new am4charts.CircleBullet())

    confirmados.tooltipText = '{valueY.value}'
    sanados.tooltipText = '{valueY.value}'
    fallecidos.tooltipText = '{valueY.value}'
    chart.cursor = new am4charts.XYCursor()

    let scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(confirmados)
    chart.scrollbarX = scrollbarX

    chart.legend = new am4charts.Legend()

    //console.log(confirmados.dataFields)

    /* year,cars,motorcycles,bicycles
        1994,1587,650,121
        1995,1567,683,146
        1996,1617,691,138 */

    /*     let data = [
              {
                date: 'Fri Mar 13 2020',
                name: 'Nuevo Casos',
                value: 2
              },
              {
                date: 'Sat Mar 14 2020',
                name: 'Nuevo Casos',
                value: 7
              },
              {
                date: 'Sun Mar 15 2020',
                name: 'Nuevo Casos',
                value: 8
              }
            ] */

    /*     chart.data = data

            let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
            dateAxis.renderer.grid.template.location = 0

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
            valueAxis.tooltip.disabled = true
            valueAxis.renderer.minWidth = 35

            let series = chart.series.push(new am4charts.LineSeries())
            series.dataFields.dateX = 'date'
            series.dataFields.valueY = 'value'

            series.tooltipText = '{valueY.value}'
            chart.cursor = new am4charts.XYCursor()

            let scrollbarX = new am4charts.XYChartScrollbar()
            scrollbarX.series.push(series)
            chart.scrollbarX = scrollbarX

            this.chart = chart */
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
  width: 100%;
  height: 500px;
}
</style>
