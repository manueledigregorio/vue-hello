const {createApp} = Vue

createApp({

  data(){
    // qui scrivo tutte le variabili
    return {
      message:'Ciao questo è il mio primo Framework',

      img:'img/01-vuejs.jpg',
    }

  }

}).mount('#app');