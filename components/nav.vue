<template>
  <header role="banner">
    <nav
      class="navbar gradient is-primary is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" v-bind:href="'/' + repositorio">
            COVID-19 {{ pais }}
          </a>
          <a
            role="button"
            class="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" id="navMenu">
          <div class="navbar-end">
            <a
              target="_blank"
              v-bind:href="
                'https://github.com/' + usuarioGit + '/' + repositorio
              "
              class="navbar-item"
            >
              Github
            </a>
            <a href="#footer" class="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        pais: process.env.country,
        usuarioGit: process.env.gitUser,
        repositorio: process.env.gitRepotitory
      }
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  })
</script>

<style>
  .gradient {
    background: linear-gradient(-30deg, #2e2575, #b713a6 45%, #2e2575 45%) #361b9c;
    box-shadow: 0px 10px 1rem 0 rgba(79, 56, 164, 0.2);
  }
</style>
