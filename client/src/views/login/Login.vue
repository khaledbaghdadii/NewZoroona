<template>
  <div>
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
        </div>
      </nav>
    </div>
    <section class="login-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div
                class="login-img"
                :style="{
                  'background-image':
                    'url(' + require('@/assets/images/login.svg') + ')',
                }"
              ></div>
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Log In</h3>
                  </div>
                </div>
                <form action="#" class="">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3 text-white"
                    >
                      Log In
                    </button>
                  </div>
                  <div class="form-group d-flex">
                    <div class="w-100 text-left">
                      <label
                        class="checkbox-wrap checkbox-primary mb-0"
                        id="rememberLabel"
                        >Remember Me
                        <input type="checkbox" id="rememberCheckbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="w-100 text-end">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                </form>
                <p class="text-center fc-secondary">
                  Not a member?
                  <a class="fw-600" data-toggle="tab" href="sign-up.html"
                    >Sign Up</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
