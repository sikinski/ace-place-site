<template>
  <div class="home-page">
    <h1 class="start-heading">
      <span class="colorful-text">Лучшие акции</span> в городе
    </h1>
    <PriorityStocks />
  </div>
</template>

<script>
import PriorityStocks from '@/components/PriorityStocks.vue';
export default { components: { PriorityStocks } };
</script>

<style lang="sass">
@import "../assets/styles/adaptive/sizes.sass"

.start-heading
  margin-top: 200px
  margin-bottom: 17px
  text-align: center
  font-weight: 800
  font-size: 96px
  line-height: 123px
  text-transform: uppercase
@media (max-width: $breakpoint-large-pc)
  .start-heading
    margin-top: 160px
    margin-bottom: 14px
    font-size: 86px
    line-height: 113px
@media (max-width: $breakpoint-middle-pc)
  .start-heading
    margin-top: 140px
    margin-bottom: 14px
    font-size: 70px
    line-height: 100px
@media (max-width: $breakpoint-small-pc)
  .start-heading
    margin-top: 80px
    margin-bottom: 10px
    font-size: 60px
    line-height: 80px
@media (max-width: $breakpoint-tablet)
  .start-heading
    margin-top: 60px
    margin-bottom: 0
    font-size: 46px
    line-height: 50px
    // border: 1px solid red
@media (min-width: $breakpoint-mobile-small) and (max-width: $breakpoint-mobile-large - 10px)
  .start-heading
      margin-top: 50px
      margin-bottom: 0
      font-size: 40px
      line-height: 46px
</style>
