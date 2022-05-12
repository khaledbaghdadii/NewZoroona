<template>
  <div>
    <section
      class="section-intro-landing container mb-5"
      v-if="$store.state.user.name"
    >
      <h1 class="fw-700">Recommended For You</h1>
      <div class="row mb-5">
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
            <h4 class="fw-700 pt-8 ps-3 text-white">Baaqline Waterfall</h4>
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
            <h4 class="fw-700 pt-8 ps-3 text-white">Raouche</h4>
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
            <h4 class="fw-700 pt-8 ps-3 text-white">Tyre Ruins</h4>
          </div>
        </div>
      </div>
    </section>
    <section
      class="d-flex flex-column-reverse flex-lg-row pb-5 mb-5 section-intro-landing container"
      v-else
    >
      <div class="align-self-center me-lg-5">
        <h1 class="fw-700 fs-50 mt-4">
          Wherever you go, go with all your heart
        </h1>
        <h5 class="pt-3 pe-5">
          Zorooona is the place, where you can discover all Lebanon's places!
          So, are you ready to get started?
        </h5>
        <button
          class="btn btn-primary mt-5 py-3 px-3 text-white fs-18 homepage-btn"
          @click="goToSignUp()"
        >
          Let's Explore!
        </button>
      </div>
      <div>
        <img src="@/assets/images/homepage.svg" class="img-beside-text" />
      </div>
    </section>

    <section class="section-featured-places pb-5">
      <div class="container">
        <h1 class="pt-5 mt-5 pb-4 fw-700">
          Discover Some of Our Featured Places!
        </h1>
        <div class="row">
          <div
            v-for="place in featuredPlaces"
            v-bind:key="place.id"
            class="col-sm-12 col-md-6 col-lg-4 py-3"
          >
            <div
              class="post-img-featured"
              :style="{
                'background-image':
                  'url(' +
                  `${place.image}` +
                  ')',
              }"
            >
              <div class="text-end">
                <span class="badge badge-background-color m-3">{{place.Category.description}}</span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <h4 class="fw-700 pt-3">
                {{place.description}}
              </h4>
              <h5 class="fw-500"><i>{{place.name}}</i></h5>
              <div class="d-flex">
                <img
                  src="@/assets/images/location.svg"
                  id="location"
                  class="me-2"
                  alt="location"
                />
                <span>{{place.address}}, {{place.city}} - {{place.district}}</span>
              </div>
              <div class="d-flex">
                <i class="fa fa-money-bill fa-lg text-primary pt-2 pe-2"></i>
                <span class="fw-700 fs-24">${{place.averagePricePerPerson}}</span>
                <span class="fs-14 pt-2">/person</span>
              </div>
            </div>
          </div>

          <!-- <div class="col-sm-12 col-md-6 col-lg-4 py-3">
            <div
              class="post-img-featured"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/raouche.jpg') + ')',
              }"
            >
              <div class="text-end">
                <span class="badge badge-background-color m-3">Classical</span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <h4 class="fw-700 pt-3">Enjoy the beauty of Lebanon's sunset</h4>
              <div class="d-flex">
                <img
                  src="@/assets/images/location.svg"
                  id="location"
                  class="me-2"
                  alt="location"
                />
                <span> <strong>Raouche</strong>, Beirut</span>
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
              class="post-img-featured"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/Tyre-Ruins.jpg') + ')',
              }"
            >
              <div class="text-end">
                <span class="badge badge-background-color m-3">Historical</span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <h4 class="fw-700 pt-3">Enjoy the beauty of Tyre's History</h4>
              <div class="d-flex">
                <img
                  src="@/assets/images/location.svg"
                  id="location"
                  class="me-2"
                  alt="location"
                />
                <span> <strong>Tyre Ruins</strong>, Tyre</span>
              </div>
              <div class="d-flex">
                <div class="ps-1 fs-24 fw-700 text-primary me-3">$</div>
                <span class="fw-700 fs-24">10</span>
                <span class="fs-14 pt-2">/person</span>
              </div>
            </div>
          </div> -->
        </div>
        <div class="text-center mt-5">
          <button
            class="btn btn-primary px-3 py-3 text-white fs-18"
            id="discover"
            @click="goToPlacesPage()"
          >
            Discover All Places!
          </button>
        </div>
      </div>
    </section>

    <section class="d-flex flex-column flex-lg-row pb-5 container my-5 py-5">
      <img src="@/assets/images/manager.svg" class="img-beside-text me-lg-5" />
      <div class="align-self-center ms-lg-5">
        <h1 class="fw-700 fs-50 mt-4">Do You Have a Place?</h1>
        <h5 class="pt-3 pe-5">
          If you have a place in Lebanon, and you are aiming to cooperate with
          Zoroona, click on the button below!
        </h5>
        <button
          class="btn btn-primary mt-5 py-3 px-3 text-white fs-18 homepage-btn"
          @click="goToSignupManager()"
        >
          Become a Manager!
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import HomepageService from "@/services/HomepageService.js";
export default {
  name: "homepage",
  data() {
    return {
      featuredPlaces: [],
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
    goToPlacesPage() {
      this.$router.push("/placesPage");
    },
    goToSignupManager(){
      this.$router.push("/signupManager");
    }
  },
  mounted() {
    const self = this;
    this.showLoader = true;
    self.activeItem = -1;
    HomepageService.getFeaturedPlaces()
      .then(function (res) {
        console.log(res.data)
        self.showLoader = false;
        self.featuredPlaces = res.data || [];
        console.log(self.featuredPlaces)
      })
      .catch(function () {
        self.showLoader = false;
      });
  },
};
</script>
