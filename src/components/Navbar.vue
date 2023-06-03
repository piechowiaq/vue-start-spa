<template>
  <nav
      :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand']">
    <a class="navbar-brand" href="#">My Vue</a>
    <div class="collapse navbar-collapse container-fluid" id="navbarNav">
      <ul class="navbar-nav">
                <navbar-link
              v-for="(page, index) in publishedPages"
              class="nav-item"
              :key="index"
              :page="page"
              :index="index"
              :is-active="activePage === index"
              @activated="$emit('activated')"
          ></navbar-link>
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
  computed: {
    publishedPages() {
      return this.pages.filter(p => p.published);
    }
  },
  created() {
    this.getThemeSetting();
  },
  props: ['pages', 'activePage'],

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