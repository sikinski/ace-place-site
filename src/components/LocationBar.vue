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
</style>
