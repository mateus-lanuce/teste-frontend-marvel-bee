<script setup>
import Home from '@/components/icons/Home.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { vMaska } from "maska"
import { Modal } from 'bootstrap';
import * as yup from 'yup';
import { computed } from 'vue';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required().min(14),
  message: yup.string().required(),
});

const onSubmit = (values) => {
  console.log(values);

  // abrir modal
  const myModal = new Modal(document.getElementById('contactModal'));
  myModal.show();
};

const isMobile = computed(() => {
  return window.innerWidth < 992;
});

</script>

<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <span class="fw-normal">Contact</span>
          </div>
        </li>
      </ol>
    </nav>

    <section aria-label="contact form" class="mb-5">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ meta }" validate-on-mount>
      
        <div class="row mb-3">
          <div class="col-12 col-lg-4 d-flex flex-column gap-1">
            <div>
              <label for="name" class="form-label">Name</label>
              <Field 
                type="text" 
                name="name"
                v-slot="{ field, errors }"
              >
                <input 
                  v-bind="field" 
                  class="form-control"
                  :class="{ 'border-primary-red': errors.length }"
                  placeholder="Enter your name"
                />
              </Field>
            </div>
            <ErrorMessage class="color-primary-red" name="name" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-lg-4 d-flex flex-column gap-1">
            <div>
              <label for="email" class="form-label">Email</label>
              <Field 
                type="text" 
                name="email"
                v-slot="{ field, errors }"
              >
                <input 
                  v-bind="field" 
                  class="form-control"
                  :class="{ 'border-primary-red': errors.length }"
                  placeholder="Enter your email"
                />
              </Field>
            </div>
            <ErrorMessage class="color-primary-red" name="email" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-lg-4 d-flex flex-column gap-1">
            <div>
              <label for="phone" class="form-label">Phone</label>
              <Field 
                type="text" 
                name="phone"
                v-slot="{ field, errors }"
              >
                <input 
                  v-maska 
                  :data-maska="'(##) # ####-####'"
                  v-bind="field" 
                  class="form-control"
                  :class="{ 'border-primary-red': errors.length }"
                  placeholder="Enter your phone"
                />
              </Field>
            </div>
            <ErrorMessage class="color-primary-red" name="phone" />
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-12 col-lg-4 d-flex flex-column gap-1">
            <div>
              <label for="message" class="form-label">Message</label>
              <Field 
                type="text" 
                name="message"
                v-slot="{ field, errors }"
              >
                <textarea 
                  v-bind="field" 
                  class="form-control"
                  :class="{ 'border-primary-red': errors.length }"
                  placeholder="Enter your message"
                />
              </Field>
            </div>
            <ErrorMessage class="color-primary-red" name="message" />
          </div>
        </div>

          <div class="col-12 col-lg-4">
            <button 
              type="submit" 
              class="btn btn-primary-red mt-lg-45 btn-width"
              :class="{ 'w-100': isMobile }"
              :disabled="!meta.valid"
            >
              Send
            </button>
          </div>

      </Form>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="contactModalLabel">Message sent successfully!</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p class="fw-normal mb-0">Thank you, we'll reach you as soon as possible</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary-red" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
  .btn-width {
    width: 96px;
  }
</style>
