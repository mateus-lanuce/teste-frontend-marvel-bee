<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <div class="d-flex flex-column h-100">
    <NavBar />
  
    <RouterView class="flex-fill" v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in" name="fade">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback>
                <div class="d-flex justify-content-center align-items-center h-100">
                  <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>

<style lang="scss">
@import './assets/scss/colors.scss';
@import './assets/scss/buttons.scss';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

html, body {
  font-family: 'Roboto', sans-serif;
}

.gap-2rem {
  gap: 2rem;
}
</style>
