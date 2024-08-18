
/*Crea una aplicación que muestre u oculte un texto cuando el usuario haga clic en un botón. */

const { createApp, ref } = Vue;

createApp({
  setup() {
    const visible = ref(true);

    const toggleVisibility = () => {
      visible.value = !visible.value;
    };

    return { visible, toggleVisibility };
  }
}).mount('#app');