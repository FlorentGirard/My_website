<template>
  <Swiper
    :modules="[SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :pagination="{
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    class="carousel"
  >
    <SwiperSlide
      v-for="(slide, index) in carouselData.projects"
      :key="index"
      class="swiper__slide"
    >
      <img
        :src="`/picture/${slide.picture}`"
        :alt="slide.alt"
        class="carousel__picture"
      />
      <a class="carousel__link" :href="slide.link">{{ slide.title }} ↗</a>
    </SwiperSlide>
    <div class="swiper-pagination"></div>
  </Swiper>
</template>

<script lang="ts" setup>
const carouselData = reactive({
  projects: [
    {
      picture: 'visualClub.webp',
      alt: 'VisualClub',
      title: 'visualclub-studio.com',
      link: 'https://www.visualclub-studio.com/',
    },

    {
      picture: 'portfollio_alex.webp',
      alt: 'bananamisu',
      title: 'bananamisu.fr',
      link: 'http://gallery.visualclub-studio.com/',
    },
  ],
})
</script>

<style lang="scss" scoped>
.carousel {
  border-top: 1px solid $colorMain;
  border-bottom: 1px solid $colorMain;
  margin-top: $gutter * 3;
}
.carousel__picture {
  position: relative;
  height: 698px;
}

.carousel__link {
  position: absolute;
  bottom: 15px;
  left: 20px;
  z-index: 1;
  font-size: $fontSize * 1.2;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 15px;
  right: 20px;
  left: auto !important;
  transform: translate(0) !important;
}
.swiper-pagination {
  text-align: right;
}

@media screen and (min-width: 124px) {
  .carousel {
    margin-top: 0;
    border-top: none;
    height: calc(100vh - 32px);
  }
}
</style>
