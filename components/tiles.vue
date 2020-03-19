<template>
  <div class="container">
    <div class="has-text-centered">
      <h1 class="is-size-2 title-magenta">
        <strong>CORONAVIRUS VENEZUELA</strong>
      </h1>
    </div>
    <nav class="level is-mobile padding-top">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-info">Confirmados</p>
          <p class="title has-text-info">42</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-primary">Sanados</p>
          <p class="title has-text-primary">0</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading has-text-danger">Fallecidos</p>
          <p class="title has-text-danger">0</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
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
  .heading {
    font-size: 16px !important;
  }
  .title-magenta {
      strong {
            color: #b713a6 !important;
      }
  }
  .padding-top {
    margin-top: 1.5rem;
  }
</style>
