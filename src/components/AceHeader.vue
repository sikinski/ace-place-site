<template>
  <header class="header">
    <div class="inner-block">
      <router-link to="/">
        <img src="@/assets/images/icons/logo.svg" alt="logo" class="logo" />
      </router-link>
      <form class="header-search">
        <input type="text" class="input" placeholder="Поиск..." />
      </form>
      <LocationBar :city="city" v-if="!showBar" />
      <nav class="header-nav">
        <router-link :to="{ name: 'News' }" class="nav-item"
          >Новости</router-link
        >
        <router-link :to="{ name: 'News' }" class="nav-item">Акции</router-link>
        <router-link :to="{ name: 'News' }" class="nav-item"
          >Товары</router-link
        >
        <router-link :to="{ name: 'News' }" class="nav-item"
          >F.A.Q.</router-link
        >
      </nav>

      <button class="auth-btn">Вход</button>
    </div>
  </header>
</template>

<script>
import LocationBar from './LocationBar.vue';
import { useScreenStore } from '../stores/screen';

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: 'Москва',
    },
    gender: {
      type: String,
      default: '',
    },
    showBar: {
      type: Boolean,
    },
  },
  components: {
    LocationBar,
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/base/colors.sass"
@import "../assets/styles/adaptive/sizes.sass"

.header
  height: 86px
  width: 100%
  background-color: $purpleCol
  .inner-block
    overflow: hidden
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      max-height: 42px
      margin-top: -6px
    .header-search
      background: #FFFFFF
      border-radius: 36.5px
      height: 40px
      width: 18.7%
      .input
        border-radius: 36.5px
        background-image: url(../assets/images/icons/search.svg)
        background-size: 16px
        background-position-y: center
        background-position-x: 21px
        background-repeat: no-repeat
        padding-left: 55px
        height: 100%
        width: 100%
        &::placeholder
          color: #5F5F5F

    .header-nav
      font-family: 'Mont'
      font-weight: 800
      font-size: 16px
      line-height: 20px
      color: #DACEF9
      .nav-item
        margin: 0 17px
        transition: 0.2s
        &:hover
          text-decoration-line: underline
          color: #FFFFFF
    .auth-btn
      padding: 9px 47px
      font-weight: 400
      font-size: 16px
      line-height: 20px
      color: #FFFFFF
      border: 1px solid #FFFFFF
      border-radius: 43px
@media (max-width: $breakpoint-large-pc)
  .header
    height: 68px
    .inner-block
      .logo
        max-height: 32px
      .header-search
        height: 33px
        .input
          background-size: 14px
          background-position-x: 14px
          padding-left: 38px
      .location-bar
        font-size: 11px
        .text
          padding: 0 10px
        .accept-location
          margin: 0 5px
          padding: 4px 21px
      .header-nav
        font-size: 14px
        line-height: 18px
        .nav-item
          margin: 0 12px
      .auth-btn
        padding: 4px 30px
        font-size: 14px

@media (max-width: $breakpoint-middle-pc)
  .header
    height: 58px
    .inner-block
      .logo
        max-height: 23px
      .header-search
        height: 24px
        .input
          background-size: 12px
          background-position-x: 12px
          padding-left: 32px
          &::placeholder
            font-size: 12px
      .location-bar
        font-size: 9px
        .text
          padding: 0 10px
        .accept-location
          // margin: 0 5px
          padding: 2px 19px
      .header-nav
        font-size: 10px
        line-height: 16px
        .nav-item
          margin: 0 8px
      .auth-btn
        padding: 2px 20px
        font-size: 12px
@media (max-width: $breakpoint-small-pc)
  .header
    height: 44px
    .inner-block
      .logo
        max-height: 19px
      .header-search
        height: 20px
        .input
          background-size: 10px
          background-position-x: 8px
          padding-left: 24px
          &::placeholder
            font-size: 10px
      .location-bar
        font-size: 9px
        .text
          padding: 0 10px
        .accept-location
          // margin: 0 5px
          padding: 2px 19px
      .header-nav
        font-size: 10px
        line-height: 16px
        .nav-item
          margin: 0 8px
      .auth-btn
        padding: 2px 20px
        font-size: 12px
</style>
