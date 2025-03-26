<template>
  <section class="container my-10">
    <h1 class="sample text-lg font-bold text-gray-500">
      <i class="fab fa-vuejs" /> Vue example
    </h1>

    <p>{{ count }}</p>
    <button @click="plus">
      <i class="fas fa-plus" /> plus
    </button>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

library.add(faPlus, faVuejs);

export default defineComponent({
  name: 'ExampleVue',
  setup() {
    const count = ref(0);

    const plus = () => {
      count.value += 1;
    };

    return {
      count,
      plus,
    };
  },
});
</script>

<style scoped>
.sample {
  font-size: 20px;
}
</style>
