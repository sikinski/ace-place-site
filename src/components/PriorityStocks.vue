<template>
  <div class="priority-stocks">
    <StockCard
      v-for="priorityCard of priorityStockData"
      :key="priorityCard"
      :priority-card-data="priorityCard"
      :class="
        priorityCard.id === priorityStockData.length - 1
          ? 'stock-card-last'
          : ''
      "
    />
  </div>
</template>

<script>
import StockCard from './StockCard.vue';
export default {
  components: { StockCard },

  data() {
    return {
      priorityStockData: [],
    };
  },
  async mounted() {
    await this.getCardData();
  },
  methods: {
    async getCardData() {
      const url = 'stock-card-data.json';
      await fetch(url)
        .then((res) => {
          return res;
        })
        .then((data) => {
          return data.json();
        })
        .then((cardObjs) => {
          this.priorityStockData = cardObjs;
        });
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/adaptive/sizes.sass"

.priority-stocks
    display: flex
    justify-content: space-between
    width: 100%
    max-height: 300px
    margin: 95px 0
@media (max-width: $breakpoint-middle-pc)
  .priority-stocks
      margin: 65px 0
@media (max-width: $breakpoint-tablet)
  .priority-stocks
    display: flex
    flex-direction: column
    max-height: none
    width: 100%
    padding: 0 
    margin: 30px 0
</style>
