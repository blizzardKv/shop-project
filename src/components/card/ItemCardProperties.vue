<template>
  <div class="card__properties properties">
    <img
        class="properties__property-image"
        v-for="property in filteredProperties"
        :key="property.alt"
        :src="require(`../../../${property.url}`)"
        :alt="property.alt"
    />
    <div class="properties__extra-properties">
      +{{ notVisibleItemsNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCardProperties',
  data() {
    return {
      properties: [
        {
          url: 'src/assets/svg/properties/essential.svg',
          alt: 'essential',
        },
        {
          url: 'src/assets/svg/properties/gmf.svg',
          alt: 'gmf',
        },
        {
          url: 'src/assets/svg/properties/nutrition.svg',
          alt: 'nutrition',
        },
        {
          url: 'src/assets/svg/properties/commercial.svg',
          alt: 'commercial',
        },
      ],
      visibleItemsNumber: 3,
    };
  },
  computed: {
    filteredProperties() {
      return this.properties.slice(0, this.visibleItemsNumber);
    },
    notVisibleItemsNumber() {
      return this.properties.length - this.visibleItemsNumber;
    },
  },
};
</script>

<style scoped lang="scss">
  .properties {
    display: flex;
    justify-content: center;
    align-items: center;

    &__property-image {
      margin-right: 6px;
    }

    &__extra-properties {
      color: $secondary-midnight;
      font-size: 10px;
      font-weight: 600;
      font-family: $font-open-sans;
      line-height: 13.62px;
      text-align: center;
    }
  }
</style>
