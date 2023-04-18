<template>
  <div class="spa">
    <Banner :is-big-caroussel="false" :text-array="spaData.textArray" />
    <div class="spa__content">
      <section class="spa__sectionLeft">
        <div class="spa__firstView">
          <h1 class="spa__title">Développeur full-stack*</h1>

          <p class="spa__presentation">
            *Je conçois et développe vos projets web,
            <span class="spa__presentation--block"
              >site internet et application.</span
            >
          </p>

          <Banner
            :is-big-caroussel="false"
            :text-array="spaData.textArray"
            class="spa__bannerBorder"
          />
        </div>
        <Banner
          :is-big-caroussel="true"
          :text-array="spaData.text"
          class="spa__bannerHideMobil"
        />
      </section>

      <section class="spa__sectionRight">
        <Carousel class="spa__caroussel" />
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
        <Form />

        <Contact />
      </section>
    </div>
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
  text: [
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
    'Parlez-moi de votre projet, je serais ravi de vous apporter toutes les solutions de développement pour votre projet web et application.',
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
  border-bottom: 1px solid $colorMain;
  padding-bottom: $gutter * 3;

  &--block {
    display: block;
  }
}

.spa__bannerBorder,
.spa__bannerHideMobil {
  display: none;
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

@media screen and (min-width: 1024px) {
  .spa__bannerBorder {
    display: block;
  }
  .spa__content {
    display: flex;
    justify-content: space-between;
  }

  .spa__sectionRight {
    width: 501px;
    max-width: 501px;
    border-left: 1px solid $colorMain;
    flex: none;
  }

  .spa__sectionLeft {
    width: calc(100% - 502px);
    position: relative;
  }

  .spa__firstView {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 31px);
  }
  .spa__title {
    font-size: $fontSize * 9;
    padding-left: $gutter * 5;
    display: block;
    padding-bottom: $gutter * 5;
    border-bottom: 1px solid $colorMain;
  }

  .spa__presentation {
    font-size: $fontSize * 2;
    // position: absolute;
    //left: 50%;
    //transform: translateX(-50%);

    &--block {
      display: inline-block;
    }
  }

  .spa__hero {
    display: none;
  }

  .spa__section {
    position: absolute;
    right: 0;
    z-index: 1;
    //float: right;
  }
}
</style>
