<template>
  <div class="login-wrapper">
    <div class="navbar-container py-3">
      <nav class="navbar navbar-expand-md bg-dark navbar-light">
        <div class="container d-flex justify-content-center">
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
    <section class="mt-3">
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
                    <h3 class="mb-4 fw-700">Log In</h3>
                  </div>
                </div>
                <form action="#" class="">
                  <div class="form-group mb-3">
                    <label class="label" for="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
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
                    <div class="form-check mb-3 text-left w-100">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                        />
                        Remember Me
                      </label>
                    </div>

                    <div class="w-100 text-end">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                </form>
                <div class="d-flex justify-content-center">
                  <div>Not a member?</div>
                  <div><router-link class="ps-2 fw-700" :to="{ name: 'Signup' }">Sign Up</router-link></div>
                </div>
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
  name: "Login",
};
</script>
