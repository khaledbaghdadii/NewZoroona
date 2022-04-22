<template>
  <div class="places-page-container container">
    <div class="d-flex  flex-column-reverse flex-lg-row pb-5">
      <div class="align-self-center me-lg-5 bg-rose p-md-5 rounded-8">
        <h1 class="fs-60">
          <strong class="text-secondary">Are you ready to start </strong>
          <span class="text-primary fw-700">DISCOVERING?</span>
        </h1>
      </div>
      <img src="@/assets/images/discover.svg" class="img-beside-text mb-5"/>
    </div>

    <section class="featured p-5 align-content-center my-5">
      <h2 class="fw-700 text-center mb-5">
        <span class="fa fa-star text-primary"></span>
        <span class="fw-700 mx-2">Featured Places</span
        ><span class="fa fa-star text-primary"></span>
      </h2>
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
            <div class="carousel-item active">
              <img
                src="@/assets/images/raouche.jpg"
                alt="Raouche"
                class="aaaaa"
              />
              <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/baaqline-waterfall.jpg" alt="" />
              <div class="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="@/assets/images/Tyre-Ruins.jpg" alt="New York" />
              <div class="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
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
  </div>
</template>
<script>
export default {
  name: "Placespage",
};
</script>
