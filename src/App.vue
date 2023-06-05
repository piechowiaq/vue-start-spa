<template>
  <navbar
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
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    }
  }
}
</script>

<style scoped>

</style>