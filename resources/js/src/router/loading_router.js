// router.js
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Daftar rute Anda di sini
  ]
});

// Gunakan reactive untuk nilai loading
import { ref } from 'vue';
const isLoading = ref(false);

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  isLoading.value = false;
});

export { router, isLoading };
