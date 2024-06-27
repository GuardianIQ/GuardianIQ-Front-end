<template>
  <div class="payment-form">
    <h2>Formulario de Pago</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="fullName">Nombre Completo:</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>
      <div class="form-group">
        <label for="address">Dirección:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <div class="form-group">
        <label for="cardNumber">Número de Tarjeta:</label>
        <input type="text" id="cardNumber" v-model="cardNumber" required pattern="\d{16}" />
        <span v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</span>
      </div>
      <div class="form-group">
        <label for="expiryDate">Fecha de Expiración:</label>
        <input type="text" id="expiryDate" v-model="expiryDate" placeholder="MM/AA" required />
      </div>
      <div class="form-group">
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv" required />
      </div>
      <button type="submit">Enviar Pago</button>
    </form>
    <div v-if="showSuccessMessage" class="alert alert-success">
      Pago enviado con éxito!
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      fullName: '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      showSuccessMessage: false,
      errors: {}
    };
  },
  methods: {
    submitForm() {
      this.realizarpago();
    },
    async realizarpago() {
      try {
        const paymentData = {
          fullName: this.fullName,
          address: this.address,
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv
        };


        await axios.post('http://localhost:3000/payments', paymentData);

        this.showSuccessMessage = true;
      } catch (error) {
        console.error('Error while making payment:', error);
      }
    }
  }
};
</script>

<style scoped>
.payment-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #0d3dff;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
.alert {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
</style>
