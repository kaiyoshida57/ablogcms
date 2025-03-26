import { createApp, h } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ExampleVue from '@/components/example.vue';

export default () => {
  const app = createApp({
    components: {
      ExampleVue,
    },
    render() {
      return h(ExampleVue);
    },
  });
  app.component('Fa', FontAwesomeIcon); // eslint-disable-line vue/multi-word-component-names
  app.mount('#js-vue-example');
};
