<template>
  <header class="header">
    <div class="inner-block">
      <router-link to="/">
        <img src="@/assets/images/icons/logo.svg" alt="logo" class="logo" />
        <img
          src="@/assets/images/icons/logo_mobile.svg"
          alt="logo"
          class="logo logo-mobile"
        />
      </router-link>
      <form class="header-search">
        <input type="text" class="input" placeholder="Поиск..." />
      </form>
      <LocationBar v-if="screenWidth > 720" :city="city" />
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
      <div class="auth-btns">
        <button class="auth-btn sign-in">Вход</button>
        <button class="auth-btn register">Регистрация</button>
      </div>
    </div>
  </header>
</template>

<script>
import LocationBar from './LocationBar.vue';
export default {
  components: { LocationBar },
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
    screenWidth: {
      type: Number,
      required: true,
    },
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
      margin-right: 5px
    .logo-mobile
      display: none
    .header-search
      display: flex
      justify-content: center
      align-items: center
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
    .auth-btns
      display: flex
      align-items: center
      .auth-btn
        padding: 9px 47px
        font-weight: 400
        font-size: 16px
        line-height: 20px
        color: #FFFFFF
        border: 1px solid #FFFFFF
        border-radius: 43px
      .register
        display: none
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
      .header-nav
        font-size: 14px
        line-height: 18px
        .nav-item
          margin: 0 12px
      .auth-btns
        .auth-btn
          padding: 4px 30px
          font-size: 14px
          line-height: 18px

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
      .header-nav
        font-size: 10px
        line-height: 16px
        .nav-item
          margin: 0 8px
      .auth-btns
        .auth-btn
          padding: 2px 20px
          font-size: 12px
          line-height: 14px
@media (max-width: $breakpoint-small-pc)
  .header
    height: 44px
    .inner-block
      .logo
        max-height: 19px
      .header-search
        height: 20px
        .input
          font-size: 8px
          background-size: 8px
          background-position-x: 8px
          padding-left: 22px
          &::placeholder
            font-size: 8px
      .header-nav
        font-size: 8px
        line-height: 12px
        .nav-item
          margin: 0 5px
      .auth-btns
        .auth-btn
          padding: 3px 15px
          font-size: 10px
          line-height: 12px
@media (max-width: $breakpoint-tablet)
  .header
    background-color: rgba(0, 0, 0, 0)
    padding: 33px 0
    height: 117px
    .inner-block
      .logo
        display: none
      .logo-mobile
        max-height: 35px
        display: block
      .header-search
        display: none
      .header-nav
        display: none
      .auth-btns
        display: flex
        height: 100%
        width: 50%
        justify-content: space-between
        .auth-btn
          color: #000
          border: 1px solid $purpleCol
          height: 90%
          font-size: 12px
          line-height: 15px
          padding: 0
        .sign-in
          width: 38%
        .register
          display: block
          width: 55%
@media (max-width: $breakpoint-mobile-large)
  .header
    .inner-block // here alitems
      .auth-btns
        width: 56%
        .auth-btn
          height: 33px

@media (min-width: $breakpoint-mobile-small) and (max-width: $breakpoint-mobile-large - 10px)
  .header
    height: 100px
    .inner-block
      .logo-mobile
        max-height: 30px
      .auth-btns
        max-height: 30px
        width: 50%
        .auth-btn
          font-size: 10px
          height: 100%
</style>
