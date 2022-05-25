<template>
  <div class="location-bar">
    <p class="text">
      Ваш регион:&nbsp;
      <a href="#" class="city">{{ city }}</a>
    </p>
    <button class="accept-location">Да</button>
    <button class="change-location">Изменить</button>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/base/colors.sass"
@import "../assets/styles/adaptive/sizes.sass"

.location-bar
  display: flex
  align-items: center
  justify-content: center
  font-size: 12px
  line-height: 15px
  height: 42px
  background-color: $purpleCol
  .text
    font-weight: 400
    color: #F0EFF5
    padding: 0 14px
  .city
    font-weight: 800
  .accept-location
    font-weight: 400
    margin: 0 15px
    padding: 4px 31px
    color: #1B1B1B
    background-color: #FFFFFF
  .change-location
    font-weight: 300
    color: #F0EFF5
    text-decoration: underline

@media (max-width: $breakpoint-large-pc)
  .location-bar
    font-size: 11px
    .text
      padding: 0 10px
    .accept-location
      margin: 0 5px
      padding: 4px 21px
@media (max-width: $breakpoint-middle-pc)
  .location-bar
    font-size: 9px
    .text
      padding: 0 10px
    .accept-location
      padding: 2px 19px

@media (max-width: $breakpoint-small-pc)
  .location-bar
    font-size: 7px
    .accept-location
      margin: 0 3px
      padding: 1px 12px

@media (min-width: $breakpoint-mobile-large) and (max-width: $breakpoint-tablet)
  .location-bar
    height: 40px
    font-size: 12px
    line-height: 16px
    .text
      padding: 0 14px
    .accept-location
      width: 80px
      height: 22px
      margin: 0 15px


@media (max-width: $breakpoint-mobile-large)
  .location-bar
    height: 40px
    font-size: 12px
    line-height: 16px
    .text
      padding: 0 14px
    .accept-location
      width: 80px
      height: 22px
      margin: 0 15px
@media (min-width: $breakpoint-mobile-small) and (max-width: $breakpoint-mobile-large - 10px)
  .location-bar
    height: 38px
    font-size: 10px
    line-height: 12px
    .accept-location
      width: 65px
      height: 20px
</style>
