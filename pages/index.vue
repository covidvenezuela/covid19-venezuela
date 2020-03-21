<template>
  <div>
    <Map />
    <ChartCases />
    <Chart />
  </div>
</template>

<script>
  import Map from '~/components/map.vue'
  import ChartCases from '~/components/chart_cases.vue'
  import Chart from '~/components/chart.vue'

  export default {
    components: {
      Map,
      ChartCases,
      Chart
    }
  }
</script>

<style></style>
