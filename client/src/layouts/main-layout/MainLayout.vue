<template>
  <div>
    <!-- Header Container -->
    <header id="Header">
      <Header />
    </header>
    <!-- END Header Container -->

    <!-- Main Container -->
    <main id="main-container">
      <!-- Page Content -->
      <router-view />
      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->

    <!-- Footer Conatiner -->
    <footer>
      <Footer />
    </footer>
    <!-- End of Footer Conatiner -->
  </div>
  <!-- END Page Container -->
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "main-layout",
  components: {
    Header,
    Footer,
  },
};
</script>
