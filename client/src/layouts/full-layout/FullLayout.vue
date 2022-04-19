<template>
  <div class="layout-full">
    <!-- Main Container -->
    <main id="main-container">
      <!-- Page Content -->
      <router-view />
      <!-- END Page Content -->
    </main>
    <!-- END Main Container -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "full-layout",
  components: {
    Footer,
  },
};
</script>
