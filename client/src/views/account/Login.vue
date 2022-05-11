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
    <div
      v-if="showLoader"
      class="d-flex align-items-center justify-content-center"
      :style="{ height: 'calc(100vh - 180px)' }"
    >
      <!-- <div class="spinner-border text-primary" role="status" :style="{width: '3rem', height: '3rem'}">
        <span class="visually-hidden">Loading...</span>
      </div> -->
      <img
        class="spin"
        src="@/assets/images/spinner.png"
        alt="spinner"
        :height="80"
        :width="80"
      />
    </div>
    <section class="mt-3" v-else>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div
                class="login-img me-2 mt-3"
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
                <div class="bg-danger rounded-8" v-if="wrongCredentials">
                  <h5 class="p-3 text-white">Email or Password Wrong!</h5>
                </div>
                <form @submit.prevent="login()">
                  <div class="form-group mb-3">
                    <label class="label" for="email">Email</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="loginForm.email"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="loginForm.password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3 py-2 text-white"
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
                  <div>
                    <router-link class="ps-2 fw-700" :to="{ name: 'Signup' }"
                      >Sign Up</router-link
                    >
                  </div>
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
import AccountService from "@/services/AccountService.js";
export default {
  name: "Login",
  data() {
    return {
      showLoader: "",
      roleTypeId: 3,
      wrongCredentials: false,
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const self = this;
      this.showLoader = true;
      this.roleTypeId = this.$store.state.user.roleTypeId
      AccountService.loginUser(this.loginForm)
        .then(function (res) {
          self.$store.dispatch("setUser", res.data);
          console.log("User logged!");
          if(self.roleTypeId == 3){
            self.$router.push("/homepage");
          }else if(self.roleTypeId == 2){
            self.$router.push("/ManagerPage");
          }
          self.showLoader = false;
        })
        .catch((error) => {
          self.wrongCredentials = true
          self.timeWrongCredentials();
          self.showLoader = false;
          self.loginForm.email = "";
          self.loginForm.password = "";
          self.errorMessage = error.message;
          console.log("There was an error!", error);
          
        });
    },
    timeWrongCredentials() {
      setTimeout(() => {this.wrongCredentials = false}, 4000);
    },
  },
};
</script>
