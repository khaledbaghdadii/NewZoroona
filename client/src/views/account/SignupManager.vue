<template>
  <div class="bg-rose">
    <div class="container pt-2">
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
      <div class="row justify-content-center mt-3">
        <div class="col-md-12 col-lg-10">
          <div class="wrap d-md-flex justify-content-center">
            <div v-if="flagNext" class="login-wrap p-3">
              <div class="d-flex">
                <div class="w-100">
                  <h2 class="mb-4 fw-700 text-center text-primary">
                    Manager Info
                  </h2>
                </div>
              </div>
              <form v-on:submit.prevent="signupManager()">
                <div class="form-group mb-3">
                  <label class="label" for="name">Full Name</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    v-model="signupForm.userName"
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
                    v-model="signupForm.userEmail"
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
                    <label class="label" for="dateofbirth">Date of Birth</label>
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
                    <label class="label" for="phonenumber">Phone Number</label>
                    <input
                      name="phoneNumber"
                      id="phoneNumber"
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      v-model="signupForm.userPhoneNumber"
                      required
                    />
                  </div>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-primary text-white px-5 py-2"
                    @click="flagNext = false"
                  >
                    <span class="fs-20">Next</span>
                    <i class="fa fa-arrow-right fa-lg ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
            <div v-else class="login-wrap p-3">
              <div class="d-flex">
                <div class="w-100">
                  <button
                    class="btn btn-primary px-3 py-2 mb-2 text-white"
                    @click="this.flagNext = true"
                  >
                    <i class="fa fa-arrow-left"></i> Back
                  </button>
                  <h2 class="mb-4 fw-700 text-center text-primary">
                    Place Info
                  </h2>
                </div>
              </div>
              <form v-on:submit.prevent="signupManager()">
                <div class="form-group mb-3">
                  <label class="label" for="name">Place Name</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    class="form-control"
                    placeholder="Place Name"
                    v-model="signupForm.placeName"
                    required
                  />
                </div>

                <div class="form-group mb-3">
                  <label class="label" for="name">Place Email</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="Place Email"
                    v-model="signupForm.placeEmail"
                    required
                  />
                </div>

                <div class="form-group mb-3">
                  <label class="label" for="city">City</label>
                  <input
                    name="city"
                    id="city"
                    type="text"
                    class="form-control"
                    placeholder="City"
                    v-model="signupForm.city"
                    required
                  />
                </div>

                <div class="form-group mb-3">
                  <label class="label" for="password">Address</label>
                  <input
                    name="address"
                    id="address"
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    v-model="signupForm.address"
                    required
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6 col-12 mb-3">
                    <label class="label" for="gender">District</label>
                    <br />

                    <select
                      name="district"
                      id="district"
                      class="select w-100 position-relative"
                      required
                      v-model="signupForm.district"
                    >
                      <option disabled value="">-- District --</option>
                      <option value="Male">Beirut</option>
                      <option value="Female">Nabatieh</option>
                      <option value="Other">Sour</option>
                    </select>
                  </div>
                  <div class="col-sm-6 col-12 mb-3">
                    <label class="label" for="dateofbirth">Sector</label>
                    <br />
                    <select
                      name="sector"
                      id="sector"
                      class="select w-100 position-relative"
                      required
                      v-model="signupForm.sector"
                    >
                      <option disabled value="">-- Sector --</option>
                      <option value="Male">Private</option>
                      <option value="Female">Public</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="phonenumber"
                      >Place Phone Number</label
                    >
                    <input
                      name="phoneNumber"
                      id="phoneNumber"
                      type="tel"
                      class="form-control"
                      placeholder="Phone Number"
                      v-model="signupForm.placePhoneNumber"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="website">Place Website</label>
                    <input
                      name="website"
                      id="website"
                      class="form-control"
                      placeholder="Website"
                      v-model="signupForm.website"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="image">Image</label>
                    <input
                      name="image"
                      id="image"
                      type="file"
                      @change="getImage($event)"
                      class="form-control"
                      placeholder="select Your Place Image"
                      
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="image">Description</label>
                    <textarea
                      class="form-control"
                      rows="3"
                      id="feedback"
                      name="feedback"
                      v-model="signupForm.description"
                      maxlength="35"
                    ></textarea>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-primary text-white px-5 fs-20 py-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AccountService from "@/services/AccountService.js";
export default {
  name: "SignupManager",
  data() {
    return {
      signupForm: {
        placeEmail: "test@hotmail.com",
        placeName: "idkplace2",
        placePhoneNumber: "4555",
        city: "jhdhb",
        district: "dd",
        address: "dd",
        location: "test",
        website: "test",
        sector: "test",
        description: "esttt",
        categoryId: 1,
        orientationId: 1,
        hasReservation: 1,
        averagePricePerPerson: 23,
        userEmail: "ahmaddddd@gmail.com",
        password: "password",
        userName: "newmanager2",
        userPhoneNumber: "23",
        gender: "male",
        dateOfBirth: "02/02/2000",
        roleTypeId: 2,
      },
      showLoader: "",
      flagNext: true,
      Images:[]
    };
  },
  methods: {
    getImage(e) {
      this.Images = e.target.files[0]
      console.log(this.Images)
    },
    signupManager() {
      let data = new FormData();
      for(const key in this.signupForm){
        console.log(`${key}: ${this.signupForm[key]}`)
        data.append(key,this.signupForm[key])
      }

      console.log("I entereddd");
      const self = this;
      console.log(this.Images)
      data.append("image",this.Images)
      // this.signupForm[0].image = this.Images
      console.log("Payload from front end"+JSON.stringify(this.signupForm))
      AccountService.addManager(data)
        .then(function () {
          console.log("signupForm")
          self.$router.push('/homepage')
        })
        .catch((error) => {
          self.showLoader = false;
          this.errorMessage = error.message;
          console.log("There was an error!", error);
        });
    },

  },
};
</script>
