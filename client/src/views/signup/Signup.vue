<template class="login-wrapper">
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
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
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
                <form action="#" class="">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Email</label>
                    <input
                      name="email"
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
                        class="select w-100 position-relative"
                        required
                        v-model="signupForm.gender"
                      >
                        <option disabled="disabled" selected="selected">
                          -- Gender --
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div class="col-sm-6 col-12 mb-3">
                      <label class="label" for="dateofbirth"
                        >Date of Birth</label
                      >
                      <div class="input-group date" id="datepicker">
                        <input
                          name="dateofbirth"
                          type="date"
                          class="form-control"
                          id="date"
                          placeholder="MM/DD/YYYY"
                          v-model="signupForm.DOB"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="phonenumber"
                        >Phone Number</label
                      >
                      <input
                        name="phonenumber"
                        type="tel"
                        class="form-control"
                        placeholder="Phone Number"
                        v-model="signupForm.phoneNumber"
                        required
                      />
                    </div>
                    <div>
                      <input name="roletypeid" type="hidden" value="3" />
                    </div>
                  </div>
                  <div class="form-group d-flex">
                    <div class="form-check mb-3 text-left w-100">
                      <label class="form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                        />
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3 text-white"
                      @click="signup()"
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
      signupForm: {
        email: "",
        password: "",
        gender: "",
        DOB: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    signup() {
      console.log("I'm trying to add user")
      AccountService.addUser(this.signupForm)
        .then(function () {
          console.log("User Added!");
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>
