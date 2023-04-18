<template>
  <div>
    <FormKit
      id="myForm"
      type="form"
      class="test1"
      submit-label="Register"
      :actions="false"
      @submit="sendEmail"
    >
      <FormKit
        type="textarea"
        name="message"
        placeholder="Description de votre projet..."
        rows="10"
        :classes="{
          input: 'input--text',
          inner: 'input__inner',
        }"
      />
      <FormKit
        type="text"
        name="name"
        placeholder="Votre Nom et prenom...."
        validation="required|length:3"
        validation-visibility="blur"
        :validation-messages="{
          length: 'Votre nom et prenom doit contenir au minimum 3 caractéres',
          required: 'Le nom est un champs obligatoire! Veuillez le renseigner.',
        }"
        :classes="{
          input: 'input',
          inner: 'input__inner',
          message: 'message-error',
        }"
      />
      <FormKit
        type="email"
        name="email"
        validation="required|email"
        validation-visibility="blur"
        :validation-messages="{
          email: 'Veuillez respecter le format email: john@gmail.com',
          required:
            'L\'email est un champs obligatoire! Veuillez le renseigner.',
        }"
        placeholder="Votre email.."
        :classes="{
          input: 'input',
          message: 'message-error',
          inner: 'input__inner',
        }"
      />
      <FormKit
        type="tel"
        name="tel"
        validation="required"
        validation-visibility="blur"
        :validation-messages="{
          required:
            'Le telephone est un champs obligatoire! Veuillez le renseigner.',
        }"
        placeholder="Votre telephone..."
        :classes="{
          input: 'input',
          inner: 'input__inner',
          message: 'message-error',
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

<script setup lang="ts">
import { reset } from '@formkit/core'

const sendEmail = (value) => {
  console.log(value)
  reset('myForm')
}
</script>

<style lang="scss">
.input {
  vertical-align: middle;
  height: 70px;
  width: calc(100% - 34px);
  border: none;
  font-size: $fontSize * 1.5;
  color: $colorMain;
  padding-left: $gutter * 3;

  &:focus {
    outline: none;
    /*    border-top: 2px solid $colorMain;
    border-bottom: 1px solid $colorMain;
    box-shadow: none; */
  }

  &--text {
    @extend .input;
    min-height: 276px;
    padding-top: $gutter * 2.6;
    border-top: none;
  }

  &::placeholder {
    color: $colorMain;
  }
}

.input__inner {
  border-top: 1px solid rgba($colorMain, 1);
}

[data-invalid] .input__inner {
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  color: red;
}

/* [data-invalid] .formkit-inner {
  border: none;
  border-color: red !important;
  border-bottom: 1px solid red;
  border-top: 2px solid red !important;

  //box-shadow: 0 0 0 1px red;
} */

.message-error {
  font-size: 12px;
  color: red;
  padding: $gutter 0 $gutter $gutter * 3;
  display: flex;
  align-items: center;

  &::before {
    content: url('/picture/svg/error-warning-line.svg');
    width: 15px;
    height: 15px;
    margin-right: $gutter * 0.5;
    filter: invert(39%) sepia(23%) saturate(6303%) hue-rotate(336deg)
      brightness(102%) contrast(113%);
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
