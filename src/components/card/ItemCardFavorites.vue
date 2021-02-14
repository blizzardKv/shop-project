<template>
  <button
      class="card__favorites favorites"
      :class="{ favorites_added:addedToFavorites }"
      @click="addToFavorites"
      type="button"
  />
</template>

<script>
export default {
  name: 'ItemCardFavorites',
  data() {
    return {
      addedToFavorites: false,
    };
  },
  methods: {
    addToFavorites() {
      this.addedToFavorites = !this.addedToFavorites;
    },
  },
};
</script>

<style scoped lang="scss">
  .favorites {
    position: absolute;
    top: 11px;
    right: 16px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-image: url('~svg/icons/favorites.svg');
    background-repeat: no-repeat;
    background-size: 18px;
    border: 1px solid transparent;
    outline: 0;
    transition: background-image 0.3s linear;

    &:focus-visible {
      border: 1px solid $primary-dark;
    }

    &_added {
      background-image: url('~svg/icons/added-to-favorites.svg');
      transition: background-image 0.3s linear;
    }
  }
</style>
