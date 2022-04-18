<template>
  <div>
    <section
      class="d-flex justify-content-between section-intro-landing container"
    >
      <div>
        <h1 class="fw-700 mt-5">
          Wherever you go, go <br />
          with all your heart
        </h1>
        <h5 class="pt-3">
          Zorooona is the place, where you can <br />
          discover all Lebanon's places!
        </h5>
        <button class="btn btn-primary mt-5 py-2 px-3 text-white" id="SignUp">
          Let's Explore!
        </button>
      </div>
      <div>
        <img src="@/assets/images/homepage.svg" id="HomepageCoverPhoto" />
      </div>
    </section>

    <section class="section-featured-places my-3">
      <div class="container">
        <h1 class="pt-3 pb-4">Discover Some of Our Featured Places!</h1>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div
              class="post-img"
              :style="{
                'background-image':
                  'url(' + require('@/assets/images/baaqline-waterfall.jpg') + ')',
              }"
            >
              <div class="text-end">
                <span class="badge badge-background-color m-3">Natural</span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <h4 class="fw-700 pt-3">Enjoy the beauty of Lebanon's waterfalls</h4>
              <div class="d-flex">
                <img
                  src="@/assets/images/location.svg"
                  id="location"
                  class="me-2"
                  alt="location"
                />
                <span> <strong>Baaqline Waterfall</strong>, Mount Lebanon</span>
              </div>
              <div class="d-flex">
                <div class="ps-1 fs-24 fw-700 text-primary me-3">$</div>
                <span class="fw-700 fs-24">35</span>
                <span class="fs-14 pt-2">/person</span>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div
              class="post-img"
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

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div
              class="post-img"
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "homepage",
};
</script>
