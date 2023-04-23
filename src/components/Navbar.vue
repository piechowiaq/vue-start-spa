<template>
  <nav
      :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand']">
    <a class="navbar-brand" href="#">My Vue</a>
    <div class="collapse navbar-collapse container-fluid" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="(page, index) in pages" class="nav-item" :key="index">
          <navbar-link
              :page="page"
              :is-active="activePage === index"
              @click.prevent="navLinkClick(index)"
          ></navbar-link>
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
import NavbarLink from "@/components/NavbarLink";

export default {
  components: {NavbarLink},
  created() {
    this.getThemeSetting();
  },
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

      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem('theme');

      if(theme) {

        this.theme = theme;
      }
    }
  }
}
</script>

<style scoped>

</style>