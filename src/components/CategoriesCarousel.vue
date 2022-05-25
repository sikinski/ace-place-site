<template>
  <carousel
    v-if="carouselData"
    :items-to-show="3"
    :transition="500"
    class="categories-carousel"
  >
    <slide
      v-for="carouselCard of carouselData"
      :key="carouselCard.id"
      class="carousel-card"
      :class="(carouselCard.id + 1) % 3 ? '' : 'carousel-card-last'"
      :style="{ backgroundColor: carouselCard.backgroundColor }"
    >
      <a href="#">
        <p class="description">
          {{ carouselCard.description }}
        </p>
        <img :src="carouselCard.pic" alt="pic" class="pic" />
        <img :src="carouselCard.picMobile" alt="pic" class="pic_mobile" />
      </a>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      carouselData: [],
    };
  },
  async mounted() {
    await this.getItemData();
  },
  methods: {
    async getItemData() {
      const url = 'carousel.json';
      await fetch(url)
        .then((res) => {
          return res;
        })
        .then((data) => {
          return data.json();
        })
        .then((cardObjs) => {
          this.carouselData = cardObjs;
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.categories-carousel
    display: flex
    position: relative
    justify-content: space-between
    align-items: center
    max-height: 184px
    width: 100%
    margin-top: 45px
    margin-bottom: 23px
    .carousel__track
        display: flex
        justify-content: space-between
        .carousel__slide
            width: 31.7% !important
    .cards-container
        display: flex
        justify-content: space-between
        align-items: center
    .carousel-card
        height: 184px
        width: 31.8%
        border-radius: 19px
        margin-right: 39px
        a
            display: flex
            position: relative
            align-items: center
            justify-content: space-between
            height: 100%
            .description
                padding: 43px 0
                padding-left: 33px
                font-weight: 800
                font-size: 26px
                line-height: 33px
                text-align: left
                color: #FFFFFF
                max-width: 55%
            .pic
                display: block
                position: absolute
                object-fit: scale-down
                top: 0
                right: 0
                max-width: 47%
                border-radius: 19px
            .pic_mobile
                display: none
    .carousel-card-last
        margin-right: 0
// @media (max-width: $breakpoint-large-pc)
// @media (max-width: $breakpoint-middle-pc)
// @media (max-width: $breakpoint-small-pc)
// @media (max-width: $breakpoint-tablet)
// @media (max-width: $breakpoint-mobile-large)
// @media (min-width: $breakpoint-mobile-small) and (max-width: $breakpoint-mobile-large - 10px)
</style>
