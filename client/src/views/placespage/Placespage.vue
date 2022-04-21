<template>
    <div class="places-page-container container">
        <h1 class="fw-700 text-center">Are you READY to start EXPLORING?</h1>
        <h2 class="fw-700">Featured Places</h2>
        <!-- Carousel -->
        <div id="carousel" class="carousel slide mb-3" data-bs-ride="carousel">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
        </div>
  
        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active post-img"               
            :style="{
                'background-image':
                  'url(' +
                  require('@/assets/images/baaqline-waterfall.jpg') +
                  ')',
              }">

            </div>
            <div class="carousel-item post-img"               
            :style="{
                'background-image':
                  'url(' + require('@/assets/images/raouche.jpg') + ')',
              }">

            </div>
            <div class="carousel-item post-img"               
            :style="{
                'background-image':
                  'url(' + require('@/assets/images/Tyre-Ruins.jpg') + ')',
              }"
            >
            </div>
        </div>
  
        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

    </div>
</template>
<script>
export default {
  name: "Placespage",
};
</script>