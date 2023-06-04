<template>
  <navbar
      :pages="pages"
      :active-page="activePage"
  ></navbar>

  <router-view></router-view>
<!--  <create-page-->
<!--    @page-created="pageCreated">-->
<!--  </create-page>-->
</template>

<script>
import Navbar from "@/components/Navbar";
import PageViewer from "@/components/PageViewer";
import CreatePage from "@/components/CreatePage";


export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
  },
  created() {
    this.getPages();

    this.$bus.$on('navBarLinkActivated', (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: []
    };
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    }
  }
}
</script>

<style scoped>

</style>