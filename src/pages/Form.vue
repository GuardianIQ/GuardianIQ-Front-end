<template>
  <toolbar></toolbar>
  <div class="form-wrapper">
  <div class="form-container">
    <h2>Rellena el formulario</h2>
    <img src=".././assets/logoGuardianIQ.png">
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-field">
        <h2>Información personal</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="formData.nombre" required>
      </div>
      <div class="form-field">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-field">
        <label for="edad">Edad:</label>
        <input type="number" id="edad" v-model="formData.edad" required>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <div class="form-field">
        <label for="sexo">Sexo:</label>
        <select id="sexo" v-model="formData.sexo" required>
          <option value="">Selecciona</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div class="form-field">
        <label>Horario de trabajo:</label>
        <input type="number" id="number" v-model="formData.number" required>
      </div>
      <div class="form-field">
        <label>Contrato:</label>
        <div>
          <input type="radio" id="cortoPlazo" value="cortoPlazo" v-model="formData.contrato">
          <label for="cortoPlazo">Corto Plazo</label>
        </div>
        <div>
          <input type="radio" id="largoPlazo" value="largoPlazo" v-model="formData.contrato">
          <label for="largoPlazo">Largo Plazo</label>
        </div>
      </div>
      <button type="submit" class="submit-button">Enviar</button>
    </form>
  </div>
  </div>
</template>


<script>
import Toolbar from "../components/Toolbar-component.vue";

export default {
  components: {Toolbar},
  data() {
    return {
      formData: {
        nombre: '',
        email: '',
        edad: null,
        sexo: '',
        contrato: ''
      },
      errorMessage:''
    };
  },
  methods: {
    submitForm() {
      if (this.formData.edad < 18) {
        this.$notify({
          group: 'foo',
          title: 'Error',
          text: 'Esta opción está habilitada para mayores de 18 años',
          type: 'error'
        });
        return;
      }
      console.log('Formulario enviado:', this.formData);
    }
  }
};
</script>

<style>

body{
  background-color: #11315C;
}
.form-wrapper {
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
}

.contact-form {
width: 100%;
}

.form-field {
display: flex;
flex-direction: column;
margin-bottom: 1rem;
}

label {
margin-bottom: 0.5rem;
font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
select {
padding: 0.5rem;
border: 1px solid #ced4da;
border-radius: 0.25rem;
}

.submit-button {
padding: 0.5rem;
color: #fff;
background-color: #F9A825;
border: none;
border-radius: 0.25rem;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
margin-left: auto;
margin-right: auto;
display: block;
}

.submit-button:hover {
background-color: #ff5907;
}

@media (max-width: 600px) {
.form-container {
width: 90%;
}
}
</style>
