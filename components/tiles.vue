<template>
  <div class="container">
    <div class="has-text-centered">
      <h1 class="is-size-2 title-magenta">
        <strong>CORONAVIRUS VENEZUELA</strong>
      </h1>
    </div>
    <nav class="level status padding-top">
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-danger">Confirmados</p>
          <p class="title has-text-danger">{{ computedConfirmados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-primary">Sanados</p>
          <p class="title has-text-primary">{{ computedSanados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-info">Fallecidos</p>
          <p class="title has-text-info">{{ computedfallecidos }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-success">Activos</p>
          <p class="title has-text-success">
            {{ computedConfirmados - computedSanados - computedfallecidos }}
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      let json = require('~/static/chart/2020-23-03.json')
      return {
        status: json[json.length - 1],
        dataTotal: []
      }
    },
    mounted() {
      const jsonTotal = require('~/static/map/statusAmericaLatina.json')

      for (var i = 0; i < jsonTotal.length; i++) {
        if (jsonTotal[i]['Country/Region'] == 'Venezuela') {
          if (jsonTotal[i].Confirmed != 0) {
            this.dataTotal.push(jsonTotal[i])
          }
        }
      }
    },
    computed: {
      computedConfirmados: function() {
        let total = []

        Object.entries(this.dataTotal).forEach(([key, val]) => {
          total.push(val.Confirmed) // the value of the current key.
        })

        return total.reduce(function(total, num) {
          return total + num
        }, 0)
      },
      computedSanados: function() {
        let total = []

        Object.entries(this.dataTotal).forEach(([key, val]) => {
          total.push(val.Recovered) // the value of the current key.
        })

        return total.reduce(function(total, num) {
          return total + num
        }, 0)
      },
      computedfallecidos: function() {
        let total = []

        Object.entries(this.dataTotal).forEach(([key, val]) => {
          total.push(val.Deaths) // the value of the current key.
        })

        return total.reduce(function(total, num) {
          return total + num
        }, 0)
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/all';
  .status {
    &_item {
      background-color: #f5f5f5;
      padding: 3px 20px;
      margin-bottom: 2px !important;
      margin-right: 2px;
      margin-left: 2px;
      @include mobile {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .title {
      padding-bottom: 5px;
    }
  }
  .heading {
    font-size: 22px !important;
    margin-bottom: 0px !important;
  }
  .title-magenta {
    margin-top: 20px;
    @include mobile {
      font-size: 1.8rem !important;
    }
    strong {
      color: #b713a6 !important;
      line-height: 1;
      display: inline-block;
    }
  }
  .padding-top {
    margin-top: 0.5rem;
  }
</style>
