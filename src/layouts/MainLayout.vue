<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
q-layout {
  background-color: var(--tg-theme-bg-color, #fff);
  color: var(--tg-theme-text-color, #000);
}
</style>
