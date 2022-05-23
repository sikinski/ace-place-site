<template>
  <header class="header">
    <div class="inner-block">
      <router-link to="/">
        <img src="@/assets/images/icons/logo.svg" alt="logo" class="logo" />
      </router-link>
      <form class="header-search">
        <input type="text" class="input" placeholder="Поиск..." />
      </form>
      <div class="location-bar">
        <p class="text">
          Ваш регион:&nbsp;
          <a href="#" class="city">{{ city }}</a>
        </p>
        <button class="accept-location">Да</button>
        <button class="change-location">Изменить</button>
      </div>
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
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/base/colors.sass"

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
    .header-search
      background: #FFFFFF
      border-radius: 36.5px
      height: 40px
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
    .location-bar
      display: flex
      align-items: center
      font-size: 12px
      line-height: 15px
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
      font-weight: 600
      font-size: 16px
      line-height: 20px
      color: #FFFFFF
      border: 1px solid #FFFFFF
      border-radius: 43px
</style>
