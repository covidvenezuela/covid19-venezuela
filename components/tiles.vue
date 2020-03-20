<template>
  <div class="container">
    <div class="has-text-centered">
      <h1 class="is-size-2 title-magenta">
        <strong>CORONAVIRUS VENEZUELA</strong>
      </h1>
    </div>
    <nav class="level status is-mobile padding-top">
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-danger">Confirmados</p>
          <p class="title has-text-danger">42</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-primary">Sanados</p>
          <p class="title has-text-primary">0</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-info">Fallecidos</p>
          <p class="title has-text-info">0</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-success">Activos</p>
          <p class="title has-text-success">42</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .status {
    &_item {
      background-color: #f5f5f5;
      padding: 20px;
    }
  }
  .heading {
    font-size: 16px !important;
  }
  .title-magenta {
    margin-top: 20px;
    strong {
      color: #b713a6 !important;
    }
  }
  .padding-top {
    margin-top: 1.5rem;
  }
</style>
