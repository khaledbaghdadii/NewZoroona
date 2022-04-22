<template>
  <div>
    <section
      class="section-intro-landing container mb-5 d-flex flex-column flex-lg-row pb-5 container"
    >
      <img
        src="@/assets/images/raouche.jpg"
        class="img-beside-text me-lg-5 rounded-8"
      />
      <div class="ms-lg-5">
        <h1 class="fw-700 me-3">Raouche</h1>
        <h5 class="fw-700">
          <span class="badge place-badge-background-color p-2 align-self-center"
            >Natural</span
          ><span class="mid-point"> </span><i class="fw-700">Public</i
          ><span class="mid-point"> </span>
          <span class="badge place-badge-background-color p-2 align-self-center"
            ><span class="text-white fw-700 pe-2">4</span><i class="fa fa-star text-primary"></i></span
          >
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
  </div>
</template>

<script>
export default {
  name: "DetailedPlacePage",
};
</script>
