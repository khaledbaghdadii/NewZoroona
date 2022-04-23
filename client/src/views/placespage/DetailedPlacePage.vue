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

        <button
          class="btn btn-primary mt-2 rounded-8 py-2 text-white fs-24 homepage-btn"
        >
          Reserve
        </button>
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
        <button class="btn btn-secondary py-2">
          <i class="fa fa-edit me-2"></i>Add Review
        </button>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 review-box mb-5">
          <div class="review p-3 d-flex bg-rose">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <button class="btn btn-secondary">
                  <i class="fa fa-flag"></i>
                </button>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
              <p class="border-top-2 pt-2 fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 mb-5 review-box">
          <div class="review p-3 d-flex bg-rose">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <button class="btn btn-secondary">
                  <i class="fa fa-flag"></i>
                </button>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
              <p class="border-top-2 pt-2 fs-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 p-3 mb-5 review-box">
          <div class="review p-3 d-flex bg-rose">
            <div class="my-2 flex-fill">
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="text-secondary fw-700">Ahmad Houmany</h4>
                <button class="btn btn-secondary">
                  <i class="fa fa-flag"></i>
                </button>
              </div>
              <h5 class="mb-3 fw-700 fs-14">ahmadhoumany24@gmail.com</h5>
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
export default {
  name: "DetailedPlacePage",
};
</script>
