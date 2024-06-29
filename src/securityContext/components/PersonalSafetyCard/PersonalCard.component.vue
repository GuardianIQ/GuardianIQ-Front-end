<template>
  <div class="guard-card">
    <img class="guard-photo" :src="personal.foto" :alt="`Foto de ${personal.nombre}`" />
    <h2 class="guard-name">{{ personal.nombre }}</h2>
    <p class="guard-district">{{ personal.distrito }}</p>
    <p class="guard-age">Edad: {{ personal.edad }} años</p>
    <p class="guard-sex">Sexo: {{ personal.sexo }}</p>
    <p class="guard-experience">Experiencia: {{ personal.experiencia }} años</p>
    <p class="guard-availability">Disponibilidad: {{ personal.disponibilidad }}</p>
    <button class="guard-button" @click="contratar">Contratar</button>
    <div v-if="showPayment" class="popup" @click.self="closePopup">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">
          <i class="fas fa-times"></i>
        </button>
        <payment :personal="personal" @close="closePopup" @pagoRealizado="realizarpago"></payment>
      </div>
    </div>
    <button class="guard-button" @click="contactar">Contactar</button>
  </div>
</template>

<script>
import payment from "../../../public/components/payment/payment.vue";

export default {
  props: {
    personal: Object
  },
  data() {
    return {
      showPayment: false,
    };
  },
  methods: {
    contratar() {
      this.showPayment = true;
    },
    contactar() {
      alert(`Contactar a ${this.personal.nombre}`);
    },
    closePopup() {
      this.showPayment = false;
    },
    realizarpago() {
      this.showPayment = false;
      alert('Pago realizado con éxito');
    }
  },
  components: {
    payment
  }
}
</script>

<style scoped>
.guard-card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.guard-photo {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.guard-name {
  font-size: 1.5em;
  margin: 10px 0;
}

.guard-district,
.guard-age,
.guard-sex,
.guard-experience,
.guard-availability {
  margin: 5px 0;
}

.guard-button {
  margin: 8px;
  padding: 10px 20px;
  background-color: #f0ad4e;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.guard-button:hover {
  background-color: #ec971f;
}
</style>
