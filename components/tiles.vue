<template>
  <div class="container background-header">
    <div class="has-text-centered">
      <h1 class="is-size-2 is-uppercase title-magenta">
        <p>CORONAVIRUS {{ pais }}</p>
      </h1>
    </div>
    <nav class="level status padding-top">
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-danger">Confirmados</p>
          <p class="title has-text-danger">{{ dataTotal.confirmados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-primary">Sanados</p>
          <p class="title has-text-primary">{{ dataTotal.sanados }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-info">Fallecidos</p>
          <p class="title has-text-info">{{ dataTotal.fallecidos }}</p>
        </div>
      </div>
      <div class="status_item level-item has-text-centered">
        <div>
          <p class="heading has-text-success">Activos</p>
          <p class="title has-text-success">
            {{ dataTotal.activos }}
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataTotal: this.$store.state.pais[0],
        pais: process.env.country
      }
    }
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/all';
  /* .background-header {
                background-image: url('~/static/background.jpg');
              } */
  .status {
    &_item {
      box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
        0 1px 3px 1px rgba(60, 64, 67, 0.16);
      background-color: #f5f5f5;
      padding: 3px 20px;
      margin-bottom: 2px !important;
      margin-right: 5px;
      margin-left: 5px;
      transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.5s;
      &:hover {
        box-shadow: 0 1px 3px 1px rgba(60, 64, 67, 0.2),
          0 2px 8px 4px rgba(180, 180, 180, 0.1);
        background-color: #fafafa;
      }
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
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#b713a6),
      to(#2e2575)
    );
    background: -o-linear-gradient(left, #b713a6, #2e2575);
    background: linear-gradient(to right, #b713a6, #2e2575);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-table;
    margin-top: 20px;
    @include mobile {
      font-size: 1.8rem !important;
    }
    p {
      color: #fff !important;
      line-height: 1;
      font-weight: 700;
    }
  }
  .padding-top {
    margin-top: 0.5rem;
  }
</style>
