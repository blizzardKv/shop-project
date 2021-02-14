<template>
  <header class="header">
    <button
        class="header__return-button"
    />
    <h2 class="header__title">
      {{ pageTitle }}
    </h2>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      pageTitle: 'Milk & Cheese',
    };
  },
};
</script>

<style scoped lang="scss">
  .header {
    position: relative;
    z-index: -1;
    height: 100px;
    background-color: $color-primary-yellow-100;
    border-radius: 0 0 8px 8px;

    &__title {
      margin-top: 0;
      padding: 9px 0;
      color: $primary-dark;
      font-size: 24px;
      font-family: $font-mukta;
      line-height: 32px;
    }

    &__return-button {
      position: absolute;
      top: 12px;
      left: 12px;
      width: 20px;
      height: 20px;
      background-color: transparent;
      background-image: url('~svg/icons/arrow-left.svg');
      border: 0;
      fill: #000;
    }
  }
</style>
