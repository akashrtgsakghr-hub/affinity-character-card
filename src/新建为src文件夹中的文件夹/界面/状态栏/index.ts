import { waitUntil } from 'async-wait-until';
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
  const appElement = document.querySelector('#app');
  if (appElement) {
    createApp(App).use(createPinia()).mount(appElement);
  }
});
