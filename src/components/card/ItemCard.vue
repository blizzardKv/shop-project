<template>
  <div class="card">
    <ItemCardProperties />
    <ItemCardFavorites />
    <ItemCardSlider />
  </div>
</template>

<script>
import ItemCardProperties from '@/components/card/ItemCardProperties.vue';
import ItemCardFavorites from '@/components/card/ItemCardFavorites.vue';
import ItemCardSlider from '@/components/card/ItemCardSlider.vue';

export default {
  name: 'ItemCard',
  components: {
    ItemCardProperties,
    ItemCardFavorites,
    ItemCardSlider,
  },
};
</script>

<style scoped lang="scss">
  .card {
    position: relative;
    z-index: 1;
    width: 312px;
    margin: -50px auto 0;
    padding: 12px 18px 16px;
    background-color: #fff;
    border-radius: 8px;
  }
</style>
