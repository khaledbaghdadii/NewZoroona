<template>
  <div>
    <section
      class="d-flex flex-column-reverse flex-lg-row justify-content-between section-intro-landing container"
    >
      <div>
        <h1 class="fw-700 mt-4">
          Wherever you go, go <br />
          with all your heart
        </h1>
        <h5 class="pt-3">
          Zorooona is the place, where you can <br />
          discover all Lebanon's places! So, are <br>you  ready to get started?
        </h5>
        <button class="btn btn-primary mt-5 py-3 px-3 text-white fs-18 homepage-btn">
          Let's Explore!
        </button>
      </div>
      <div>
        <img src="@/assets/images/homepage.svg" class="HomepageCoverPhoto" />
      </div>
    </section>

    <section class="section-featured-places pb-5 mt-4">
      <div class="container">
        <h1 class="pt-3 pb-4 fw-700">Discover Some of Our Featured Places!</h1>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 py-3">
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

          <div class="col-sm-12 col-md-6 col-lg-4 py-3">
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

          <div class="col-sm-12 col-md-6 col-lg-4 py-3">
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
        <div class="text-center mt-5">
        <button class="btn btn-primary px-3 py-3 text-white fs-18" id="discover">Discover All Places!</button>
        </div>
      </div>
    </section>

    <section class="d-flex flex-column flex-md-row justify-content-between  container  my-5 pt-5">
      <img src="@/assets/images/manager.svg" class="HomepageCoverPhoto"> 
      <div>
      <h1 class="fw-700 mt-5 pt-3">Do You Have a Place?</h1>
      <h5 class="pt-3">If you have a place in Lebanon, and you are <br> aiming to cooperate with Zoroona, click on <br>the button below!</h5>
      <button class="btn btn-primary mt-5 py-3 px-3 text-white fs-18 homepage-btn">Become a Manager!</button>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "homepage",
};
</script>
