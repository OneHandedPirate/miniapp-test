<template>
  <q-page padding>
    <q-card
      class="flex column justify-center items-center"
      style="min-height:96vh"
    >
      <q-card-section class="text-center flex column">
        <div class="text-h5">Привет, {{ username }}!</div>
        <div class="text-h6">Твой ТГ ID: {{ tgId }}</div>
        <q-btn
          v-if="!isMainButtonVisible"
          label="Показать MainButton"
          color="primary"
          @click="showMainButton"
          class="q-mx-auto q-my-md"
          rounded
        />
        <q-btn
          v-else
          label="Скрыть MainButton"
          color="primary"
          @click="hideMainButton"
          class="q-mx-auto q-my-md"
          rounded
        />
        <q-btn
          label="Show alert"
          color="primary"
          @click="showAlert"
          class="q-mx-auto q-my-md"
          rounded
        />
        <q-btn
          label="Открыть QR-сканер"
          color="primary"
          @click="openScanner"
          class="q-mx-auto q-my-md"
          rounded
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { tg } from 'boot/telegram'

const username = ref('');
const isMainButtonVisible = ref(false);
const tgId = ref('')

username.value = tg?.initDataUnsafe?.user?.first_name || 'Гость';
tgId.value = `${tg?.initDataUnsafe?.user?.id || 'Не определен'}`

const showMainButton = () => {
    tg.MainButton.setText('Закрыть')
    tg.MainButton.onClick(() => {
      closeApp();
    })
    tg.MainButton.show();
    isMainButtonVisible.value = true;
}

const hideMainButton = () => {
  tg.MainButton.hide();
  isMainButtonVisible.value = false;
}

const showAlert = () => {
  tg.showAlert('Бу! Испугался? Не бойся.')
}

const openScanner = () => {
  tg.showScanQrPopup({text: 'Наведите на QR-код'}, (text: string) => {
    tg.showAlert(text)
  });
}

function closeApp() {
  tg.close();
}
</script>
