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
            <div class="login-wrap p-4 p-md-4">
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
                    >
                      <option disabled="disabled" selected="selected">
                        -- Gender --
                      </option>
                      <option id="opp">Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="col-sm-6 col-12 mb-3">
                    <label class="label" for="dateofbirth">Date of Birth</label>
                    <div class="input-group date" id="datepicker">
                      <input
                        name="dateofbirth"
                        type="text"
                        class="form-control"
                        id="date"
                        placeholder="MM/DD/YYYY"
                        required
                      />
                      <span class="input-group-append">
                        <span class="input-group-text bg-light d-block">
                          <i class="fa fa-calendar fc-primary"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="form-group my-3">
                    <label class="label" for="phonenumber">Phone Number</label>
                    <input
                      name="phonenumber"
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <input name="roletypid" type="hidden" value="2" />
                  </div>
                </div>
                <div class="form-group d-flex">
                  <div class="w-100 text-left">
                    <label
                      class="checkbox-wrap checkbox-primary mb-0"
                      id="condLabel"
                      >I agree to the
                      <a
                        href="terms.html"
                        target="_blanc"
                        style="text-decoration: underline"
                        >Terms and Conditions.</a
                      >
                      <input
                        type="checkbox"
                        id="condCheckbox"
                        
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3 text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p class="text-center fc-secondary">
                Already have an account?
                <a
                  data-toggle="tab"
                  class="fc-primary fw-600"
                  href="log-in.html"
                  >Log In</a
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
  name: "signup",
};
</script>