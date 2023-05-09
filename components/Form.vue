<template>
  <div>
    <FormKit
      id="myForm"
      type="form"
      submit-label="Register"
      :actions="false"
      @submit="sendEmail"
    >
      <FormKit
        type="textarea"
        name="message"
        rows="10"
        placeholder="Description de votre projet..."
        :classes="{
          input: 'input--text',
          outer: 'input__outer--text',
          inner: 'input__inner input__inner--textArea',
        }"
      />
      <div class="form__blockRight">
        <FormKit
          type="text"
          name="name"
          placeholder="Votre Nom et prenom...."
          validation="required|length:3"
          validation-visibility="blur"
          :validation-messages="{
            length: 'Ce champ doit contenir au minimum 3 caractéres',
            required: 'Ce champ est obligatoire! Veuillez le renseigner.',
          }"
          :classes="{
            input: 'input',
            outer: 'input__outer',
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
            required: 'Ce champ est obligatoire! Veuillez le renseigner.',
          }"
          placeholder="Votre email..."
          :classes="{
            outer: 'input__outer',
            input: 'input',
            message: 'message-error',
            inner: 'input__inner',
          }"
        />
        <div class="form__flex">
          <FormKit
            type="tel"
            name="tel"
            validation="required"
            validation-visibility="blur"
            :validation-messages="{
              required: 'Ce champ est obligatoire! ',
            }"
            placeholder="Votre telephone..."
            :classes="{
              input: 'input input--tel',
              inner: 'input__inner',
              message: 'message-error',
              outer: ' input__outer input__outer--tel',
            }"
          />
          <FormKit
            type="submit"
            label="Envoyer"
            :classes="{
              input: 'buttonForm',
              outer: 'buttonForm__outer',
            }"
          />
        </div>
      </div>
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
  height: 70px;
  width: calc(100% - 34px);
  border: none;
  font-size: $fontSize * 1.5;
  color: $colorMain;
  padding-left: $gutter * 3;
  border-top: 1px solid rgba($colorMain, 1);

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &--text {
    @extend .input;
    min-height: 276px;
    padding-top: $gutter * 2.6;
    border-top: none;
  }

  &::placeholder {
    color: rgba($colorMain, 0.5);
  }
}

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

.buttonForm__outer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttonForm {
  font-size: $fontSize * 1.5;
  //width: 100%;
  height: 70px;
  //border-top: 1px solid $colorMain;
  //border-bottom: 1px solid $colorMain;
  //display: block;
  //background: red;
}

@media screen and (min-width: 1024px) {
  .formkit-form {
    display: flex;
    justify-content: space-between;
  }

  .form__blockRight {
    width: 35%;
    //height: auto;
  }

  .input {
    height: 98px;

    &--tel {
      border-top: none;
    }

    &--text {
      min-height: calc(300px - 30px);
    }
  }

  .input__outer {
    max-height: 100px;

    &--text {
      width: 65%;
    }
  }

  .form__flex {
    display: flex;
    justify-content: space-between;
  }

  .input__inner--textArea {
    border: 1px solid $colorMain;
    min-height: auto;
    height: 100%;
  }

  .message-error {
    transform: translateY(-20px);
    padding: 0;
    padding-left: $gutter * 3;
  }

  .buttonForm__outer,
  .input__outer--tel {
    width: 50%;
    border-bottom: 1px solid $colorMain;
    border-top: 1px solid $colorMain;
  }

  .buttonForm__outer {
    border-left: 1px solid $colorMain;
  }
}
</style>
