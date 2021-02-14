<template>
  <div id="app">
    <TheHeader />
    <ItemCard />
  </div>
</template>

<script>

import TheHeader from '@/components/layouts/TheHeader.vue';
import ItemCard from '@/components/card/ItemCard.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    ItemCard,
  },
};
</script>

<style lang="scss">

</style>
