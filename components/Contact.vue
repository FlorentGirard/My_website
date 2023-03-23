<template>
  <section class="contact">
    <h2 class="contact__title">Détails et contact</h2>
    <ul>
      <li class="contact__list">
        <a :href="`mailto:${config.public.email}`" class="theFooter__email">
          {{ config.public.email }} ↗</a
        >
      </li>
      <li class="contact__list">
        <a :href="`tel:${config.public.tel}`"> {{ config.public.tel }}↗</a>
      </li>
      <li class="contact__list">
        <a href="https://www.linkedin.com/in/florentgirard-/">LinkedIn ↗</a>
      </li>
      <li class="contact__list">
        <a href="https://www.malt.fr/profile/florentgirard?overview=true"
          >Malt ↗</a
        >
      </li>
    </ul>
    <h2 class="contact__title">Lieu d’activité</h2>
    <p class="contact__text">
      Métropole Lilloise et alentours, (France) à distance et sur site.
    </p>
    <h2 class="contact__title">Ma stack</h2>
    <p class="contact__text contact__text--uppercase">
      HTML - CSS - SCSS - javascript - TypeScript - VUEJS/NUXTJS - NESTJS -
      ReactJs
    </p>
    <h2 class="contact__title">Gestion de projets</h2>
    <p class="contact__text contact__text--uppercase">Github - GitLab</p>
    <h2 class="contact__title">DevOps</h2>
    <p class="contact__text">Méthodologie Agile(SCRUM) - GitFlow - BEM - TDD</p>
    <h2 class="contact__title">Partenaire pour la conception graphique</h2>
    <a href="https://www.visualclub-studio.com/">Visual Club ↗</a>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.contact {
  margin: 0 $gutter * 2 $gutter * 5;
  font-size: $fontSize * 1.5;
}
.contact__title {
  text-decoration: underline;
  margin-bottom: $gutter * 2;
  margin-top: $gutter * 3;
}
.contact__list {
  display: block;
  padding: $gutter * 0.75 0;
}

.contact__text {
  line-height: 18px;

  &--uppercase {
    text-transform: uppercase;
  }
}
</style>
