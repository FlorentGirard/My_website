<template>
  <div class="banner" :class="{ 'banner--height': props.isBigCaroussel }">
    <p
      v-for="n in 3"
      :key="n"
      class="banner__text"
      :class="{ 'banner__text--bigCaroussel': props.isBigCaroussel }"
    >
      <span
        v-for="(item, index) in props.textArray"
        :key="index"
        class="banner__item"
      >
        {{ item }}
      </span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  textArray: string[]
  isBigCaroussel: boolean
}>()
</script>

<style scoped lang="scss">
.banner {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid $colorMain;

  &--height {
    height: 100px;
    font-size: $fontSize * 4;
  }
}

.banner__item {
  width: auto;
  padding: 0 $gutter * 0.7;
}
.banner__text {
  animation: animate 20s linear infinite;

  &--bigCaroussel {
    animation: animate 200s linear infinite;
  }
}
@keyframes animate {
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@media screen and (min-width: 1024px) {
  .banner {
    &--height {
      height: 201px;
      font-size: $fontSize * 9.6;
    }
  }
  .banner__item {
    padding: 0 $gutter * 5;
  }
}
</style>
