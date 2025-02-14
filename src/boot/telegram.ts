import WebApp from '@twa-dev/sdk';
import { defineBoot } from '#q-app/wrappers'

const tg = WebApp;

tg.ready();
tg.expand();

export default defineBoot(({ app }) => {
  app.config.globalProperties.$telegram = tg;
});

export { tg }
