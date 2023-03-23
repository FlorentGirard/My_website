<template>
  <div class="spa">
    <Banner :text-array="spaData.textArray" />
    <h1 class="spa__title">Développeur full-stack*</h1>
    <p class="spa__presentation">
      *Je conçois et développe vos projets web, <br />
      site internet et application.
    </p>
    <Carousel />
    <Card
      title="Conception"
      paragraph="lorem fffffffffffffffffffffffffffffffffffffffffff"
    />
    <Card
      title="développement"
      paragraph="lorem fffffffffffffffffffffffffffffffffffffffffff"
    />
    <section class="spa__hero">
      <a :href="`mailto:${config.public.email}`" class="theFooter__email">
        {{ config.public.email }} ↗</a
      >
    </section>
    <Banner :text-array="spaData.textArray" />
    <Contact />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig()

const spaData = reactive({
  textArray: [
    'disponible pour de nouveaux projets!',
    'disponible pour de nouveaux projets!',
    'disponible pour de nouveaux projets!',
  ],
})
</script>
<style lang="scss" scoped>
.spa__title {
  font-size: $fontSize * 2.5;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: $gutter * 2.9;
  margin-top: $gutter * 5.1;
}

.spa__presentation {
  text-align: center;
  line-height: 14.52px;
}

.spa__hero {
  background-color: $colorMain;
  color: $colorLight;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fontSize * 1.5;
}
</style>
