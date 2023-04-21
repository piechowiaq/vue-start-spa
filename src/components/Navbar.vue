<template>
  <nav
      :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand']">
    <a class="navbar-brand" href="#">My Vue</a>
    <div class="collapse navbar-collapse container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <a class="nav-link"
             :class="{active: activePage == index}"
             :href="page.link.url"
             :title="`This link goes to the ${page.link.text} page`"
             @click.prevent="navLinkClick(index)"
          >{{ page.link.text }}</a>
        </li>
      </ul>
      <form class="d-flex">
        <button
            class="btn btn-primary"
            @click.prevent="changeTheme()"
        >Toggle Navbar

        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['pages', 'activePage', 'navLinkClick'],

  data() {

    return {
      theme: 'dark',

    }
  },
  methods: {
    changeTheme() {
      let theme = 'dark';

      if(this.theme ==='dark'){
        theme = 'light'
      }

      this.theme = theme;
    }
  }
}
</script>

<style scoped>

</style>