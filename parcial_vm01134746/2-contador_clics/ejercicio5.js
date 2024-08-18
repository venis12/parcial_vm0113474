/*Crea un contador que aumente en uno cada vez que el usuario haga clic en un botón.*/

const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);

      function increment() {
        count.value++;
      }

      return { count, increment };
    }
  }).mount('#app');