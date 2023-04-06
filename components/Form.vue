<template>
  <div>
    <FormKit
      type="form"
      class="test1"
      submit-label="Register"
      :actions="false"
      @submit="createCharacter"
    >
      <FormKit
        type="textarea"
        placeholder="Description de votre projet..."
        rows="10"
        :classes="{
          input: 'input--text',
        }"
      />
      <FormKit
        type="text"
        placeholder="Votre Nom et prenom...."
        :classes="{
          input: 'input',
        }"
      />
      <FormKit
        type="email"
        validation="email"
        validation-visibility="live"
        placeholder="Votre email.."
        :classes="{
          input: 'input',
        }"
      />
      <FormKit
        type="tel"
        placeholder="Votre telephone..."
        :classes="{
          input: 'input',
        }"
      />
      <FormKit
        type="submit"
        label="Envoyer"
        :classes="{
          input: 'buttonForm',
        }"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.input {
  vertical-align: middle;
  height: 70px;
  width: calc(100% - 34px);
  border: none;
  border-top: 1px solid $colorMain;
  font-size: $fontSize * 1.5;
  color: $colorMain;
  padding-left: $gutter * 3;

  &:focus {
    border: $colorMain !important;
  }

  &--text {
    @extend .input;
    min-height: 276px;
    padding-top: $gutter * 2.6;
    border-top: none;
  }

  &::placeholder {
    color: rgba($colorMain, 0.5);
    //padding-left: $gutter * 3;
  }
}

.buttonForm {
  font-size: $fontSize * 1.5;
  width: 100%;
  text-align: center;
  height: 70px;
  border-top: 1px solid $colorMain;
  border-bottom: 1px solid $colorMain;
}
</style>
