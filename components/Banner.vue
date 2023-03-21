<template>
  <div class="banner">
    <p v-for="n in 3" :key="n" class="banner__text">
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
}>()
</script>

<style scoped lang="scss">
.banner {
  position: fixed;
  top: 0;
  z-index: 10;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid $colorMain;
}
.banner__item {
  width: auto;
  padding: 0 $gutter * 0.7;
}
.banner__text {
  animation: animate 20s linear infinite;
}
@keyframes animate {
  0% {
    transform: translate(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

<!-- <template>
  <div class="banner">
    <p v-if="props.textArray && props.textArray.length" class="banner__text">
      <span
        v-for="(item, index) in data.repeatedText"
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
}>()

const data = reactive({
  repeatedText: [] as string[],
})

watch(
  () => props.textArray,
  () => {
    data.repeatedText = props.textArray
      .concat(props.textArray)
      .concat(props.textArray[0])
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.banner {
  position: fixed;
  top: 0;
  z-index: 10;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid $colorMain;
}
.banner__item {
  padding: 0 $gutter * 0.7;
}
.banner__text {
  animation: animate linear infinite;
  animation-duration: 20s;
}
@keyframes animate {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style> -->
