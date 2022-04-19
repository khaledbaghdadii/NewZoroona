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
                >Explore</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Homepage' }"
                >Contact Us
              </router-link>
            </li>
          </ul>
          <div class="d-flex mt-2">
            <button class="btn btn-outline-secondary me-2">Log In</button>
            <button class="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
