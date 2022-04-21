<template>
  <div class="login-wrapper">
    <div class="py-3">
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
        :height='80'
        :width='80'
      />
    </div>
    <section v-else>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex ps-5">
              <div
                class="login-img"
                :style="{
                  'background-image':
                    'url(' + require('@/assets/images/signup.svg') + ')',
                }"
              ></div>
              <div class="login-wrap p-4 p-md-3">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4 fw-700">Sign Up</h3>
                  </div>
                </div>
                <form v-on:submit.prevent="signup()">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Full Name</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      v-model="signupForm.name"
                      required
                    />
                  </div>

                  <div class="form-group mb-3">
                    <label class="label" for="name">Email</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="signupForm.email"
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
                      v-model="signupForm.password"
                      required
                    />
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-6 col-12 mb-3">
                      <label class="label" for="gender">Gender</label>
                      <br />

                      <select
                        name="gender"
                        id="gender"
                        class="select w-100 position-relative"
                        required
                        v-model="signupForm.gender"
                      >
                        <option disabled value="">-- Gender --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div class="col-sm-6 col-12 mb-3">
                      <label class="label" for="dateofbirth"
                        >Date of Birth</label
                      >
                      <div class="input-group date" id="datepicker">
                        <input
                          name="dateOfBirth"
                          type="date"
                          class="form-control"
                          id="dateOfBirth"
                          placeholder="MM/DD/YYYY"
                          v-model="signupForm.dateOfBirth"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="phonenumber"
                        >Phone Number</label
                      >
                      <input
                        name="phoneNumber"
                        id="phoneNumber"
                        type="tel"
                        class="form-control"
                        placeholder="Phone Number"
                        v-model="signupForm.phoneNumber"
                        required
                      />
                    </div>
                    <div>
                      <input
                        name="roleTypeId"
                        id="roleTypeId"
                        type="hidden"
                        value="3"
                      />
                    </div>
                  </div>
                  <div class="form-group d-flex">
                    <div class="form-check mb-3 text-left w-100">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                          required
                        />
                        I agree to the <router-link :to="{ name: 'TermsAndConditions' }" class="text-primary"><strong>Terms and conditions</strong></router-link>
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3 py-2 text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div class="d-flex justify-content-center">
                  <div>Already have an account?</div>
                  <div>
                    <router-link class="ps-2 fw-700" :to="{ name: 'Login' }"
                      >Log In</router-link
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
  name: "Signup",
  data() {
    return {
      showLoader: "",
      signupForm: {
        email: "",
        password: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        name: "",
        roleTypeId: 3,
      },
    };
  },
  methods: {
    signup() {
      const self = this;
      this.showLoader = true;
      AccountService.addUser(self.signupForm)
        .then(function (res) {
          self.$store.dispatch("setUser", res.data)
          console.log("User Added!");
          self.$router.push("/homepage");
          self.showLoader = false;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.log("There was an error!", error);
        });
    },
  },
};
</script>

