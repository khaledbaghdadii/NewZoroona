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
            <div>
              <button class="btn btn-outline-secondary me-2" @click="logout()">
                Log Out
              </button>
            </div>

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
        <!--vfor on this div-->
        <div class="bg-rose review place-box p-2 mt-5" v-for="place in places" v-bind:key="place.id" @click="goToPlacePage(place.id)">
          <h3 class="text-center mt-4 fw-700">{{ place.name }}</h3>
        </div>
      </div>
    </div>
    <Footer class="text-white mt-5"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import ManagerService from "@/services/ManagerService.js";
import AccountService from "@/services/AccountService";
export default {
  name: "ManagerPage",
  data() {
    return {
      userId: 0,
      places:[]
    };
  },
  methods: {
    goToPlacePage(id) {
      let placeID = id;
      this.$router.push({ name: "DetailedManagerPage", params: { id: placeID } });
    },
    logout() {
      const self = this
      AccountService.logoutUser()
          .then(function () {
            self.$store.dispatch("resetState");
            console.log("User logged Out!");
            self.$router.push("/homepage");
          })
          .catch((error) => {
            self.errorMessage = error.message;
            console.log("There was an error!", error);
          });
    },
  },
  components: {
    Footer,
  },
  mounted() {
    const self = this;
    this.showLoader = true;
    this.userId = this.$store.state.user.id
    ManagerService.getPlacesPerManager(this.userId)
        .then(function (res) {
          self.showLoader = false;
          self.places = res.data || [];
        })
        .catch(function () {
          self.showLoader = false;
        });
  }
};
</script>
