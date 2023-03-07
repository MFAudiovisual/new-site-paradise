<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <Field type="hidden" name="_subject" v-model="_subject" />
    <Field
      type="hidden"
      name="_next"
      value="https://sitesys-spa-template.netlify.app/thanks-contact.html"
    />
    <Field type="hidden" name="_template" value="box" />
    <div class="mb-6">
      <label class="text-base" for="name">{{ $t('form.name') }}</label>
      <Field
        v-model="name"
        type="text"
        name="name"
        as="input"
        rules="required|minLength:8|maxLength:20"
        :placeholder="$t('form.placeholderName')"
        class="border-gray-400/50 dark:bg-extra-dark focus:border-blue-400 w-full rounded border py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
      />
      <ErrorMessage name="name" class="text-red-500" />
    </div>
    <div class="mb-6">
      <label class="text-base" for="email">{{ $t('form.email') }}</label>
      <Field
        v-model="email"
        name="email"
        as="input"
        rules="required|email|maxLength:60"
        :placeholder="$t('form.placeholderEmail')"
        class="border-gray-400/50 dark:bg-extra-dark focus:border-blue-400 w-full rounded border py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
      />
      <ErrorMessage name="email" class="text-red-500" />
    </div>
    <div class="mb-6">
      <label class="text-base" for="message">{{ $t('form.message') }}</label>
      <Field
        v-model="message"
        type="text"
        name="message"
        as="textarea"
        rows="6"
        rules="required|minLength:8|maxLength:190"
        :placeholder="$t('form.placeholderMessage')"
        class="border-gray-400/50 dark:bg-extra-dark focus:border-blue-400 w-full rounded border py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
      />
      <ErrorMessage name="message" class="text-red-500" />
    </div>
    <div>
      <button
        @click="resetForm()"
        type="submit"
        class="bg-green-600 disabled:bg-slate-400 w-full rounded p-3 text-white transition hover:bg-opacity-90"
      >
        {{ $t('form.send') }}
      </button>
    </div>
  </Form>
</template>
<script setup>
import { Form, Field, ErrorMessage, defineRule, useForm } from 'vee-validate'
import { computed, ref } from 'vue'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const schema = yup.object({
  name: yup.string().required().min(8).max(20),
  email: yup.string().required().email().max(60),
  message: yup.string().required().min(8).max(190),
})
const name = ref('')
const email = ref('')
const message = ref('')
const _subject = 'SiteSys Contact'

const { handleSubmit, isSubmitting, resetForm } = useForm()

const onSubmit = (values, { resetForm }) => {
  axios({
    method: 'post',
    url: 'https://formsubmit.co/c2bcde12efe8f781c6bca852995a4342',
    data: {
      name: values.name,
      email: values.email,
      message: values.message,
      _subject: values._subject,
      _next: values._next,
      _template: values._template,
    },
  })
  resetForm()
  router.push({ name: 'thanks-contact' })
}
</script>
