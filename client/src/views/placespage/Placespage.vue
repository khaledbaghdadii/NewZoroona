<template>
  <div class="places-page-container container">
    <div class="d-flex flex-column-reverse flex-lg-row pb-5">
      <div class="align-self-center me-lg-5 bg-rose p-md-5 rounded-8">
        <h1 class="fs-60">
          <strong class="text-secondary">Are you ready to start </strong>
          <span class="text-primary fw-700">DISCOVERING?</span>
        </h1>
      </div>
      <img
        src="@/assets/images/discover.svg"
        class="img-beside-text spin-image mb-5"
      />
    </div>

    <section class="bg-rose rounded-8 p-5 align-content-center my-5">
      <h1 class="fw-700 text-center mb-5">
        <span class="fa fa-star text-primary"></span>
        <span class="fw-700 mx-2">Featured Places</span
        ><span class="fa fa-star text-primary"></span>
      </h1>
      <!-- Carousel -->
      <div class="d-flex justify-content-center">
        <div id="carousel" class="carousel slide mb-3" data-bs-ride="carousel">
          <!-- Indicators/dots -->
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          <!-- The slideshow/carousel -->
          <div class="carousel-inner">
            <div
              v-for="(place, index) in featuredPlaces"
              v-bind:key="place.id"
              class="carousel-item"
              :class="{'active': index === 0}"
            >
              <img
                src="@/assets/images/raouche.jpg"
                alt="Raouche"
                class="aaaaa"
              />
              <div class="carousel-caption">
                <h3 class="fw-700 fs-36">{{place.name}}</h3>
                <p class="fw-700"><i>{{place.district}}</i></p>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img src="@/assets/images/baaqline-waterfall.jpg" alt="" />
              <div class="carousel-caption">
                <h3 class="fw-700 fs-36">Baaqline Waterfall</h3>
                <p class="fw-700"><i>Mount Lebanon </i></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/Tyre-Ruins.jpg" alt="New York" />
              <div class="carousel-caption">
                <h3 class="fw-700 fs-36">Tyre Ruins</h3>
                <p class="fw-700"><i>Tyre</i></p>
              </div>
            </div> -->
          </div>

          <!-- Left and right controls/icons -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>

    <section class="all-places py-5 my-5">
      <h1 class="fw-700">All Places</h1>
      <div class="d-flex justify-content-between my-3">
        <div class="input-group w-40">
          <input type="search" class="form-control" placeholder="Search" />
          <button class="btn btn-primary text-white">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="justify-content-end">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <span class="text-white">Filter By</span
            ><i class="fa fa-filter ps-2 text-white"></i>
          </button>
          <!-- The Modal -->
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title fw-700">Filter By</h4>
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
                      <label for="name" class="form-label fw-700"
                        >Category:</label
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

                    <div class="my-3">
                      <label for="name" class="form-label fw-700"
                        >Orientation:</label
                      >
                      <select class="form-select cursor-pointer">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>

                    <div class="my-3">
                      <label for="category" class="form-label fw-700"
                        >Price Range:</label
                      >
                      <select class="form-select cursor-pointer">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary text-white"
                      data-bs-dismiss="modal"
                    >
                      Apply Changes
                    </button>
                    <button
                      type="button"
                      class="btn close-btn btn-secondary"
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
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 py-3">
          <div
            class="post-img cursor-pointer"
            :style="{
              'background-image':
                'url(' +
                require('@/assets/images/baaqline-waterfall.jpg') +
                ')',
            }"
            @click="goToPlacePage()"
          >
            <div class="text-end">
              <span class="badge badge-background-color m-3">Natural</span>
            </div>
          </div>
          <div class="d-flex flex-column">
            <h4 class="fw-700 pt-3">Baaqline Waterfall</h4>
            <div class="d-flex">
              <img
                src="@/assets/images/location.svg"
                id="location"
                class="me-2"
                alt="location"
              />
              <span class="fw-700">Mount Lebanon</span>
            </div>
            <div class="d-flex py-2">
              <span class="fa fa-users text-primary fa-lg pe-2"></span>
              <span class="fw-700">Family</span>
            </div>
            <div class="d-flex">
              <div class="ps-1 fs-24 fw-700 text-primary me-3">$</div>
              <span class="fw-700 fs-24">35</span>
              <span class="fs-14 pt-2">/person</span>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 py-3">
          <div
            class="post-img cursor-pointer"
            :style="{
              'background-image':
                'url(' + require('@/assets/images/raouche.jpg') + ')',
            }"
            @click="goToPlacePage()"
          >
            <div class="text-end">
              <span class="badge badge-background-color m-3">Classical</span>
            </div>
          </div>
          <div class="d-flex flex-column">
            <h4 class="fw-700 pt-3">Raouche</h4>
            <div class="d-flex">
              <img
                src="@/assets/images/location.svg"
                id="location"
                class="me-2"
                alt="location"
              />
              <span> <strong>Beirut</strong></span>
            </div>
            <div class="d-flex py-2">
              <span class="fa fa-users text-primary fa-lg pe-2"></span>
              <span class="fw-700">Family</span>
            </div>
            <div class="d-flex">
              <div class="ps-1 fs-24 fw-700 text-primary me-3">$</div>
              <span class="fw-700 fs-24">35</span>
              <span class="fs-14 pt-2">/person</span>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 py-3">
          <div
            class="post-img cursor-pointer"
            :style="{
              'background-image':
                'url(' + require('@/assets/images/Tyre-Ruins.jpg') + ')',
            }"
            @click="goToPlacePage()"
          >
            <div class="text-end">
              <span class="badge badge-background-color m-3">Historical</span>
            </div>
          </div>
          <div class="d-flex flex-column">
            <h4 class="fw-700 pt-3">Tyre Ruins</h4>
            <div class="d-flex">
              <img
                src="@/assets/images/location.svg"
                id="location"
                class="me-2"
                alt="location"
              />
              <span> <strong>South Lebanon</strong></span>
            </div>
            <div class="d-flex py-2">
              <span class="fa fa-users text-primary fa-lg pe-2"></span>
              <span class="fw-700">Family</span>
            </div>
            <div class="d-flex">
              <div class="ps-1 fs-24 fw-700 text-primary me-3">$</div>
              <span class="fw-700 fs-24">10</span>
              <span class="fs-14 pt-2">/person</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HomepageService from "@/services/HomepageService.js";
export default {
  name: "Placespage",
  data() {
    return {
      featuredPlaces: [],
    };
  },
  methods: {
    goToPlacePage() {
      this.$router.push("/detailed-placepage");
    },
  },
  mounted() {
    const self = this;
    this.showLoader = true;
    self.activeItem = -1;
    HomepageService.getFeaturedPlaces()
      .then(function (res) {
        console.log(res.data);
        self.showLoader = false;
        self.featuredPlaces = res.data || [];
        console.log(self.featuredPlaces);
      })
      .catch(function () {
        self.showLoader = false;
      });
  },
};
</script>
