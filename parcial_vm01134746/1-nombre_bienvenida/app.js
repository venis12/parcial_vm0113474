
    const { createApp, ref } = Vue
    createApp({
        setup(){
            const mensaje = ref('Bienvinidos a nuevas tendencias de programación');
            return{
                mensaje
            }
        }
        
    }).mount('#app')

