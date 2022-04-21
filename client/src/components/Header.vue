<template>
  <div class="position-fixed top-0 w-100 navbar-container py-3">
    <nav class="navbar navbar-expand-md bg-dark navbar-light">
      <div class="container">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Homepage' }">
          <img
            src="@/assets/images/zoroona-icon.png"
            alt="Zoroona Logo"
            class="me-2"
          />
          <div id="LogoName">ZOROONA</div>
        </router-link>
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
        >
          <div></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >Discover</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >Become a Manager
              </router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >Contact Us
              </router-link>
            </li>
          </ul>
          <div class="d-flex" v-if="$store.state.user.name">
            <div class="me-2">
              Welcome, <span class="text-primary fw-500"><strong>{{ $store.state.user.name }}!</strong></span>
            </div>
            <div class="dropdown header-dropdown">
              <span class="fa fa-caret-down fa-lg cursor-pointer dropdown-toggle text-primary" data-bs-toggle="dropdown"></span>
              <ul class="dropdown-menu header-dropdown-menu">
                <li><a class="dropdown-item" href="#">My Profile</a></li>
                <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Log Out</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex mt-2" v-else>
            <button class="btn btn-outline-secondary me-2" @click="goToLogin()">
              Log In
            </button>
            <button class="btn btn-primary text-white" @click="goToSignUp()">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToSignUp() {
      this.$router.push("/signup");
    },
  },
};
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar-container");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});
</script>
