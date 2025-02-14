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

        <div class="bg-primary shadow-1 rounded-borders q-mt-md grid grid-cols-6 gap-4">
          <div
            v-for="(gift, index) in gifts"
            :key="gift.id"
            class="q-mx-sm q-my-sm bg-white rounded-borders cursor-pointer flex items-center justify-center gift-box"
            :class="{ opened: openedGifts[index] }"
            @click="openGift(index)"
            style="width:20vw; height:20vw; font-size:9em; overflow: hidden"
          >
            <transition name="flip">
              <template v-if="!openedGifts[index]">
                <span>🎁</span>
              </template>
              <template v-else>
                <span>🎉</span>
              </template>
            </transition>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { tg } from 'boot/telegram'

interface Gift {
  id: number;
  coupon: string;
}

const username = ref('');
const isMainButtonVisible = ref(false);
const tgId = ref('')

const gifts = ref<Gift[]>([]);
const openedGifts = ref<boolean[]>(new Array(9).fill(false)); // Инициализация с 12 элементами
const isGiftOpened = ref(false);

username.value = tg?.initDataUnsafe?.user?.first_name || 'Гость';
tgId.value = `${tg?.initDataUnsafe?.user?.id || 'Не определен'}`

const coupons = [
  "Приват",
  "Кальян",
  "Танец на коленях",
  "Бутылка шампанского",
  "VIP-зона",
  "Бесплатное посещение",
  "Ужин с девушкой",
  "Подарок от администрации",
  "Час в саунe",
  "Бесплатный вход",
  "Скидка 20% на услуги",
  "Участие в розыгрыше",
];

const showMainButton = () => {
  tg.MainButton.setText('Закрыть')
  tg.MainButton.onClick(() => {
    closeApp();
  })
  tg.MainButton.show();
  isMainButtonVisible.value = true;
}

const getRandomCoupon = (): string => {
  const randomIndex = Math.floor(Math.random() * coupons.length);
  return coupons[randomIndex] as string;
};

const generateGifts = (): Gift[] => {
  const generatedGifts: Gift[] = [];

  for (let i = 1; i <= 9; i++) {
    generatedGifts.push({
      id: i,
      coupon: getRandomCoupon(),
    });
  }

  return generatedGifts;
};

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

const closeApp = () => {
  tg.close();
}

const openGift = (index: number) => {
  if (!isGiftOpened.value) {
    openedGifts.value[index] = true;
    isGiftOpened.value = true;
    if (gifts.value[index]?.coupon) {
      tg.showAlert(gifts.value[index].coupon);
    }
  }
}

onMounted(() => {
  gifts.value = generateGifts();
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Оставляем 4 колонки */
}
.gift-box {
  transition: transform 0.5s;
  position: relative;
}
.flip-enter-active, .flip-leave-active {
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.flip-enter-from, .flip-leave-to {
  transform: rotateY(180deg);
}
</style>
