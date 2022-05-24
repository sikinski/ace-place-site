<template>
  <div class="app-wrapper">
    <LocationBar v-if="screen.showLocationBar" :city="city" />
    <AceHeader
      :name="name"
      :date="date"
      :gender="gender"
      :showBar="screen.showLocationBar"
    />
    <main class="main">
      <div class="inner-block">
        <router-view />
      </div>
    </main>
    <AceFooter />
  </div>
</template>

<script setup>
import LocationBar from '@/components/LocationBar.vue';
import AceHeader from '@/components/AceHeader.vue';
import AceFooter from './components/AceFooter.vue';

import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import { useScreenStore } from './stores/screen';

const user = useUserStore();
const screen = useScreenStore();
const { name, date, city, gender } = storeToRefs(user);
// let { showLocationBar } = storeToRefs(screen);

window.addEventListener('resize', () => {
  if (window.innerWidth < 1024) {
    screen.showBar();
  }
});
</script>

<style lang="sass">
@import "./assets/styles/index.sass"

.app-wrapper
  display: flex
  position: relative
  flex-direction: column
  justify-content: space-between
  min-height: 100%
  height: 100%

.inner-block
  margin: 0 auto
  max-width: 1920px
  height: 100%
  padding: 0 167px
  width: 100%
  overflow-x: hidden

.main
  flex: 1

body
  font-family: 'Mont'
  background-color: $bgCol
  margin: 0
  padding: 0
  height: 100%
  overflow-x: hidden

.line
  height: 100%
  max-height: 100%

.left-line-bg
  max-height: calc(100% - 275px)

*
  font-family: 'Mont'

button
  border-radius: $borderRadius

.right-line-bg
  position: absolute
  top: 0
  right: 0
  z-index: -9999

.left-line-bg
  position: absolute
  left: 0
  top: 235px
  z-index: -9999

.left-line-bg_mobile
  display: none

.right-line-bg_mobile
  display: none

.start-heading // here
  margin: 87px 0
  text-align: center
  font-weight: 800
  font-size: 96px
  line-height: 123px
  text-transform: uppercase
  .colorful-text
    color: $purpleCol

@media (max-width: $breakpoint-large-pc)
  .inner-block
    padding: 0 110px
    max-width: $breakpoint-large-pc

@media (max-width: $breakpoint-middle-pc)
  .inner-block
    padding: 0 70px
    max-width: $breakpoint-middle-pc

@media (max-width: $breakpoint-small-pc)
  .inner-block
    padding: 0 40px
    max-width: $breakpoint-small-pc

// @media (max-width: $breakpoint-tablet)
//   .inner-block
//     padding: 0 30px
//     max-width: $breakpoint-tablet

// @media (max-width: $breakpoint-mobile-large)
//   .inner-block
//     padding: 0 70px
//     max-width: $breakpoint-mobile-large

// @media (max-width: $breakpoint-mobile-small)
//   .inner-block
//     padding: 0 70px
//     max-width: $breakpoint-mobile-small
</style>
