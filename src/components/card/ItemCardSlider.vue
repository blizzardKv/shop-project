<template>
  <div class="card__slider slider">
    <img
        class="slider__image"
        alt="image"
        src="src"
    />
    <div class="slider__controls">
      <button
          class="slider__active-button"
          type="button"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCardSlider',
};
</script>

<style scoped lang="scss">
  .slider {
    &__image {
      width: 243px;
      max-height: 190px;
      margin-bottom: 15px;
    }
  }
</style>
