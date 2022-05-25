<template>
  <div class="stock-card">
    <div
      class="main-content"
      :style="{ backgroundImage: 'url(' + priorityCardData.background + ')' }"
    >
      <div class="logo-wrapper">
        <img
          :src="priorityCardData.logoCompany"
          alt="logo"
          class="logo-company"
        />
      </div>

      <div class="card-btns">
        <button class="card-btn comments">
          <img src="../assets/images/icons/commets.svg" alt="" class="icon" />
          {{ priorityCardData.commentsNum }}
        </button>
        <button class="card-btn likes">
          <img src="../assets/images/icons/likes.svg" alt="" class="icon" />
          {{ priorityCardData.likesNum }}
        </button>
      </div>
      <p class="name-company">
        {{ priorityCardData.typeCompany }}
        <span class="bold-text">{{ priorityCardData.nameCompany }}</span>
      </p>
    </div>
    <div class="bottom-card">
      <p class="percent-discount">{{ priorityCardData.percentDiscount }}%</p>
      <small class="discount-text">
        {{ priorityCardData.discountText }}
      </small>

      <router-link :to="{ name: 'StorePage' }" class="more-btn"
        >Подробнее</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priorityCardData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/base/elements.sass"
@import "../assets/styles/base/colors.sass"
@import "../assets/styles/adaptive/sizes.sass"

$gorizontalMargin: 26px
.stock-card
  background-color: #FFFFFF
  border-radius: 19px
  // height: 300px
  width: 31.5%
  .main-content
    position: relative
    height: 197px
    // height: 65%
    background: linear-gradient(180deg, #AB8EF7 0%, #796BFA 100%)
    background-blend-mode: multiply, normal
    border-radius: 19px
    background-size: cover
    background-position: center
    .logo-wrapper
      display: flex
      align-items: center
      justify-content: center
      width: 76px
      height: 74px
      background-color: #FFFFFF
      position: absolute
      top: 23px
      border-radius: 50%
      left: $gorizontalMargin
      .logo-company
        border-radius: 50%
    .card-btns
      position: absolute
      display: flex
      top: 25px
      right: 25px
      .card-btn
        display: flex
        align-items: center
        font-weight: 600
        font-size: 16px
        line-height: 20px
        .icon
          margin: 0 7px
      .comments
        font-weight: 400
        color: white
      .likes
        font-weight: 400
        color: white
    .name-company
      position: absolute
      bottom: 7px
      left: $gorizontalMargin
      font-weight: 400
      font-size: 16px
      line-height: 20px
      color: #FFFFFF
      .bold-text
        font-weight: 800
  &:hover
    box-shadow: 0px 15px 23px -4px rgba(218, 206, 249, 0.68)
  .bottom-card
    display: flex
    align-items: center
    background-color: #FFFFFF
    justify-content: flex-start
    padding: 27px 30px
    height: auto
    border-radius: 19px
    .percent-discount
      color: $purpleCol
      font-weight: 900
      font-size: 50px
      line-height: 64px
    .discount-text
      margin: 0 13px
      color: $darkText
      font-weight: 300
      font-size: 14px
      line-height: 18px
    .more-btn
      display: flex
      justify-content: center
      align-items: center
      margin-left: auto
      padding: 10px 35px
      font-weight: 600
      font-size: 12px
      line-height: 15px
      color: #FFFFFF
      border-radius: $borderRadius
      background-color: $purpleCol
      &:hover
        background: #6151EE
        box-shadow: 0px 5px 16px -2px #C6AFFF
@media (max-width: $breakpoint-large-pc)
  .stock-card
    width: 32.5%
    .main-content
      height: 180px
      .logo-wrapper
          width: 66px
          height: 64px
          top: 18px
          left: 18px
      .card-btns
          top: 20px
          right: 20px
          .card-btn
              .icon
                  width: 16px
                  height: 16px
    .bottom-card
        padding: 18px 20px
        .percent-discount
            font-size: 32px
            line-height: 60px
        .discount-text
            margin: 0 10px
            font-size: 13px
            line-height: 17px
        .more-btn
            padding: 10px 28px
            font-size: 12px
            line-height: 15px
@media (max-width: $breakpoint-middle-pc)
  .stock-card
    .main-content
      .logo-wrapper
        width: 54px
        height: 54px
        top: 15px
        .logo-company
            width: 54px
            height: 54px
      .card-btns
        top: 15px
        right: 15px
        .card-btn
          font-size: 14px
          .icon
            width: 14px
            height: 14px
      .name-company
        font-size: 12px
        left: 15px
    .bottom-card
      padding: 13px 14px
      .percent-discount
        font-size: 30px
        line-height: 50px
      .discount-text
        margin: 0 7px
        font-size: 11px
        line-height: 13px
      .more-btn
        padding: 8px 20px
        font-size: 10px
        line-height: 13px
@media (max-width: $breakpoint-small-pc)
  .stock-card-last
    display: none
  .stock-card
    min-height: 230px
    height: 260px
    width: 49%
    .main-content
      .name-company
        font-size: 16px
    .bottom-card
      .percent-discount
        font-size: 32px
        line-height: 46px
      .discount-text
        margin: 0 7px
        font-size: 13px
        line-height: 13px
      .more-btn
        padding: 8px 18px
        font-size: 9px
@media (max-width: $breakpoint-tablet)
  .stock-card
    width: 100%
    min-height: 200px
    margin: 20px 0
    .main-content
        max-height: 65.3%
        .name-company
            left: 20px
    .bottom-card
      padding: 20px 10px
      .percent-discount
          font-size: 45px
          line-height: 58px
      .discount-text
          margin: 0 7px
          font-size: 14px
          line-height: 15px
          max-width: 40%
      .more-btn
          width: 112px
          height: 35px
          font-weight: 600
          font-size: 12px
          line-height: 20px
  .stock-card-last
    display: block
@media (max-width: $breakpoint-mobile-large)
  .stock-card
    .main-content
        .logo-wrapper
            width: 42px
            height: 45px
            .logo-company
                max-width: 70%
                max-height: 90%
        .name-company
            font-size: 14px
            line-height: 18px

    .bottom-card
        .percent-discount
            font-size: 33px
            line-height: 40px
        .discount-text
            margin: 0 7px
            font-size: 12px
            line-height: 15px
        .more-btn
            width: 112px
            height: 28px
            padding: 7px 19px
            font-weight: 600
            font-size: 12px
            line-height: 15px
@media (min-width: $breakpoint-mobile-small) and (max-width: $breakpoint-mobile-large - 10px)
  .stock-card
    height: auto
    min-height: auto
    .main-content
      height: 120px
      .logo-wrapper
          width: 42px
          height: 45px
          .logo-company
              max-width: 70%
              max-height: 90%
      .name-company
          font-size: 14px
          line-height: 18px
    .bottom-card
      height: auto
      padding: 14px 10px
      .percent-discount
          font-size: 28px
          line-height: 36px
      .discount-text
          margin: 0 px
          font-size: 10px
          line-height: 12px
      .more-btn
        width: 90px
        height: 32px
        font-size: 10px
        line-height: 12px
</style>
