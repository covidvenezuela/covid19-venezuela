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
          <p class="title has-text-danger">{{ status.confirmados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-primary">Sanados</p>
          <p class="title has-text-primary">{{ status.sanados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-info">Fallecidos</p>
          <p class="title has-text-info">{{ status.fallecidos }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-success">Activos</p>
          <p class="title has-text-success">{{ status.activos }}</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    let json = require('~/static/chart/2020-20-03.json')
    return {
      confirmados: 70,
      sanados: 15,
      fallecidos: 0,
      activos: 55,
      status: json[json.length - 1]
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
