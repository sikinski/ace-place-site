<template>
  <div class="app-wrapper">
    <AceHeader :name="name" :date="date" :city="city" :gender="gender" />
    <main class="main">
      <div class="inner-block">
        <router-view />
      </div>
    </main>
    <AceFooter />
  </div>
</template>

<script setup>
import AceHeader from '@/components/AceHeader.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';
import AceFooter from './components/AceFooter.vue';
const user = useUserStore();
const { name, date, city, gender } = storeToRefs(user);
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
  max-width: 1602px + 167px + 167px
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

.start-heading
  margin: 87px 0
  text-align: center
  font-weight: 800
  font-size: 96px
  line-height: 123px
  text-transform: uppercase
  .colorful-text
    color: $purpleCol
</style>
