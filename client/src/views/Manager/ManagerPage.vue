<template>
  <div>
    <div class="position-fixed top-0 w-100 navbar-container py-2">
      <nav class="navbar navbar-expand-md bg-dark navbar-light">
        <div class="container">
          <div class="navbar-brand d-flex">
            <img
              src="@/assets/images/zoroona-icon.png"
              alt="Zoroona Logo"
              class="me-2"
            />
            <div id="LogoName">ZOROONA</div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="collapsibleNavbar"
          ></div>
        </div>
      </nav>
    </div>
    <h1 class="text-center text-primary manager-page-container fw-700">
      My Places
    </h1>
    <div class="container mb-5">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="bg-rose review place-box p-2 mt-5" @click="goToPlacePage(1)">
          <h3 class="text-center mt-4 fw-700">Tyre Ruins</h3>
        </div>
        <div class="bg-rose review place-box p-2 mt-5">
          <h3 class="text-center mt-4 fw-700">Tyre Ruins</h3>
        </div>
      </div>
    </div>
    <Footer class="text-white mt-5"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  name: "ManagerPage",
  data() {
    return {};
  },
  methods: {
    goToPlacePage(id) {
      let placeID = id;
      this.$router.push({ name: "DetailedManagerPage", params: { id: placeID } });
    },
  },
  components: {
    Footer,
  },
};
</script>
