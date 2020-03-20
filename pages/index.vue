<template>
  <div>
    <Map />
    <Chart />
  </div>
</template>

<script>
import Chart from '~/components/chart.vue'
import Map from '~/components/map.vue'

export default {
  components: {
    Map,
    Chart
  }
}
</script>

<style></style>
