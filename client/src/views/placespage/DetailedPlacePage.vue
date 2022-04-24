<template>
  <div>
    <section
      class="section-intro-landing container mb-5 d-flex flex-column flex-lg-row pb-5 container"
    >
      <img
        src="@/assets/images/raouche.jpg"
        class="img-beside-text me-lg-5 rounded-8 mt-4"
      />
      <div class="ms-lg-5 mt-3">
        <h1 class="fw-700 me-3 text-primary">Raouche</h1>
        <h5 class="fw-700">
          <span
            class="badge place-badge-background-color py-2 px-3 align-self-center"
            >Natural</span
          ><span class="mid-point"> </span><i class="fw-700">Public</i
          ><span class="mid-point"> </span>
          <span
            class="badge place-badge-background-color py-2 px-3 align-self-center"
            ><span class="text-white fs-16 fw-700 pe-2">4</span
            ><i class="fa fa-star text-primary"></i
          ></span>
        </h5>
        <div class="d-flex flex-column">
          <h4 class="fw-700">Enjoy the beauty of Lebanon's sunset</h4>

          <div class="d-flex pb-2">
            <img
              src="@/assets/images/location.svg"
              id="location"
              class="me-3"
              alt="location"
            />
            <span> <strong>Tyre Ruins</strong>, Tyre</span>
          </div>
          <div class="d-flex pb-2">
            <span class="fa fa-users text-primary fa-lg pe-2"></span>
            <span class="fw-700 ms-2">Family</span>
          </div>
          <div class="d-flex pb-2">
            <div class="ps-1 fs-24 fw-700 text-primary me-4">$</div>
            <span class="fw-700 fs-24">10</span>
            <span class="fs-14 pt-2">/person</span>
          </div>
          <div class="d-flex pb-2">
            <span class="fa fa-phone text-primary fa-lg pe-2"></span>
            <a
              class="fw-700 ms-3 text-black no-underline"
              href="tel: +96101552123"
              >+961 01-552123</a
            >
          </div>
          <div class="d-flex pb-2">
            <span class="fa fa-envelope text-primary fa-lg pe-2"></span>
            <span class="fw-700 ms-3 text-black"
              ><a class="text-black" href="mailto: Raouche@gmail.com"
                >Raouche@gmail.com</a
              ></span
            >
          </div>
          <div class="d-flex pb-2">
            <span class="fa fa-globe text-primary fa-lg pe-2"></span>
            <span class="fw-700 ms-3"
              ><a class="text-black" href="https:/google.com" target="_blanc"
                >Raouche.com</a
              ></span
            >
          </div>
        </div>
        <div>
          <button
            class="btn btn-primary mt-2 rounded-8 py-2 text-white fs-24 homepage-btn"
            data-bs-toggle="modal"
            data-bs-target="#reserveModal"
            v-if="$store.state.user.name"
          >
            Reserve
          </button>
          <Popper :arrow="true" :zIndex="10" v-else>
            <template #content="{ close }">
              <div>
                User must be
                <router-link :to="{ name: 'Login' }">logged in!</router-link>
                <button
                  @click="close"
                  class="btn btn-outline-primary fs-10 ms-2"
                >
                  <i class="fa fa-close fa-lg"></i>
                </button>
              </div>
            </template>
            <button
              class="btn btn-primary mt-2 rounded-8 py-2 text-white fs-24 homepage-btn"
            >
              Reserve
            </button>
          </Popper>
        </div>

        <!-- The Modal -->
        <div class="modal fade" id="reserveModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title text-center fw-700">Reserve Now!</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <form class="needs-validation" v-on:submit.prevent="submitForm">
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="packages" class="form-label fw-700"
                      >Package(s):</label
                    >
                    <div class="form-check cursor-pointer">
                      <input
                        class="form-check-input cursor-pointer"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label class="form-check-label">Option 1</label>
                    </div>
                    <div class="form-check cursor-pointer">
                      <input
                        class="form-check-input cursor-pointer"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label class="form-check-label">Option 2</label>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between flex-column flex-md-row"
                  >
                    <div class="my-2">
                      <label class="form-label fw-700" for="startDate"
                        >Date From:</label
                      >
                      <div
                        class="input-group date cursor-pointer"
                        id="datepicker"
                      >
                        <input
                          name="startDate"
                          type="date"
                          class="form-control"
                          id="startDate"
                          placeholder="MM/DD/YYYY"
                          required
                        />
                      </div>
                    </div>
                    <div class="my-2">
                      <label class="form-label fw-700" for="endDate"
                        >Date To:</label
                      >
                      <div class="input-group date" id="datepicker">
                        <input
                          name="endDate"
                          type="date"
                          class="form-control"
                          id="endDate"
                          placeholder="MM/DD/YYYY"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div class="my-3">
                    <label for="numberofpeople" class="form-label fw-700"
                      >Number of People:</label
                    >
                    <input
                      name="numberofpeople"
                      type="number"
                      class="form-control"
                      id="numberofpeople"
                      placeholder="Number of People"
                      required
                    />
                  </div>

                  <div class="mt-4 text-primary text-center">
                    <h4 class="fw-700">
                      <i class="fa fa-money-bill pe-2"></i>Cost: 300,000 L.L
                    </h4>
                  </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary text-white py-2"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="btn close-btn btn-secondary py-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5 bg-rose p-5 container rounded-8">
      <h1 class="fw-700 pb-4 text-center text-primary">
        Available Packages<i class="fa fa-gift ps-2"></i>
      </h1>
      <div
        class="row mb-3 d-flex flex-lg-row justify-content-md-between align-items-center flex-column"
      >
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3 p-3 package-box">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <h2 class="border-bottom pb-2 fw-700 text-secondary">
                “ Cheesy 3azizi ”
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div class="fs-27 fw-700 text-secondary me-4">
              <i class="fa fa-money-bill"></i> 360,000 L.L
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3 p-3 package-box">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <h2 class="border-bottom pb-2 fw-700 text-secondary">
                “ Cheesy 3azizi ”
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div class="fs-27 fw-700 text-secondary me-4">
              <i class="fa fa-money-bill"></i> 360,000 L.L
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 mb-3 p-3 package-box">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <h2 class="border-bottom pb-2 fw-700 text-secondary">
                “ Cheesy 3azizi ”
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div class="fs-27 fw-700 text-secondary me-4">
              <i class="fa fa-money-bill"></i> 360,000 L.L
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-5 pt-5 container">
      <div
        class="d-flex reviews-section-title mt-5 pt-4 justify-content-between align-items-center"
      >
        <h1 class="text-primary mb-4 fw-700">Reviews</h1>
        <div>
          <button
            class="btn btn-secondary py-2"
            data-bs-toggle="modal"
            data-bs-target="#reviewModal"
            v-if="$store.state.user.name"
          >
            <i class="fa fa-edit me-2"></i>Add Review
          </button>
          <Popper :arrow="true" :zIndex="10" v-else>
            <template #content="{ close }">
              <div>
                User must be
                <router-link :to="{ name: 'Login' }">logged in!</router-link>
                <button
                  @click="close"
                  class="btn btn-outline-primary fs-10 ms-2"
                >
                  <i class="fa fa-close fa-lg"></i>
                </button>
              </div>
            </template>
            <button
              class="btn btn-secondary py-2"
            >
              <i class="fa fa-edit me-2"></i>Add Review
            </button>
          </Popper>
        </div>

        <!-- The Modal -->
        <div class="modal fade" id="reviewModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title text-center fw-700">My Review</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <form class="needs-validation" v-on:submit.prevent="submitForm">
                <!-- Modal body -->
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="rating" class="form-label fw-700"
                      >Rating:</label
                    >
                    <br />
                    <div class="fs-24">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                    </div>
                  </div>
                  <div class="my-3">
                    <label for="feedback" class="form-label fw-700"
                      >Feedback:</label
                    >
                    <textarea
                      class="form-control"
                      rows="5"
                      id="feedback"
                      name="feedback"
                      maxlength="200"
                    ></textarea>
                  </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary text-white py-2"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="btn close-btn btn-secondary py-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 mb-5">
          <div class="review p-3 d-flex bg-rose review-box">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <div>
                  <button
                    class="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#reportModal"
                    v-if="$store.state.user.name"
                  >
                    <i class="fa fa-flag"></i>
                  </button>
                  <Popper :arrow="true" :zIndex="10" v-else>
                    <template #content="{ close }">
                      <div>
                        User must be
                        <router-link :to="{ name: 'Login' }"
                          >logged in!</router-link
                        >
                        <button
                          @click="close"
                          class="btn btn-outline-primary fs-10 ms-2"
                        >
                          <i class="fa fa-close fa-lg"></i>
                        </button>
                      </div>
                    </template>
                    <button
                      class="btn btn-secondary"
                    >
                      <i class="fa fa-flag"></i>
                    </button>
                  </Popper>
                </div>

                <!-- The Modal -->
                <div class="modal fade" id="reportModal">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title fw-700">Report</h4>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                      </div>

                      <form
                        class="needs-validation"
                        v-on:submit.prevent="submitForm"
                      >
                        <!-- Modal body -->
                        <div class="modal-body">
                          <div class="mb-3">
                            <label for="name" class="form-label fw-700"
                              >I found this review:</label
                            >
                            <div class="form-check cursor-pointer">
                              <input
                                class="form-check-input cursor-pointer"
                                type="checkbox"
                                id="check1"
                                name="option1"
                                value="something"
                              />
                              <label class="form-check-label">Option 1</label>
                            </div>
                            <div class="form-check cursor-pointer">
                              <input
                                class="form-check-input cursor-pointer"
                                type="checkbox"
                                id="check1"
                                name="option1"
                                value="something"
                              />
                              <label class="form-check-label">Option 2</label>
                            </div>
                          </div>
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary text-white py-2"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                          <button
                            type="button"
                            class="btn close-btn btn-secondary py-2"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
              <h5 class="fs-18 text-secondary fw-700 pe-2">
                Rating:
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
              </h5>
              <p class="border-top-2 pt-2 fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 mb-5">
          <div class="review p-3 d-flex bg-rose review-box">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <button class="btn btn-secondary">
                  <i class="fa fa-flag"></i>
                </button>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
              <h5 class="fs-18 text-secondary fw-700 pe-2">
                Rating:
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
              </h5>
              <p class="border-top-2 pt-2 fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 mb-5">
          <div class="review p-3 d-flex bg-rose review-box">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <button class="btn btn-secondary">
                  <i class="fa fa-flag"></i>
                </button>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
              <h5 class="fs-18 text-secondary fw-700 pe-2">
                Rating:
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
                <i class="fa fa-star text-primary"></i>
              </h5>
              <p class="border-top-2 pt-2 fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Popper from "vue3-popper";
export default {
  name: "DetailedPlacePage",
  components: {
    Popper,
  },
};
</script>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 15px;
  --popper-theme-padding: 20px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
