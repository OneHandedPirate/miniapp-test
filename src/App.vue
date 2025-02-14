<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { tg } from 'boot/telegram';

const router = useRouter();

onBeforeMount(async () => {
  if (!tg?.initDataUnsafe || !tg?.initData) {
    await router.replace('/blocked');
  }
});
</script>
