<template>
  <div>
    <navbar-component></navbar-component>
    <div class="container">
      <h2>Reservar Asesoría de Seguridad Local</h2>
      <hr />
      <div class="form-container">
        <div class="form-group">
          <label>Nombre</label>
          <input v-model="nombre" class="input-field" />
        </div>
        <div class="form-group">
          <label>Apellido</label>
          <input v-model="apellido" class="input-field" />
        </div>
        <div class="form-group">
          <label>Correo</label>
          <input v-model="correo" class="input-field" type="email" />
        </div>
        <div class="form-group">
          <label>¿Ha sido vicntima de la delicuencia en su local?</label>
          <div class="button-group">
            <button @click="experienciaSeguridad = true" :class="{'active': experienciaSeguridad}">Sí</button>
            <button @click="experienciaSeguridad = false" :class="{'active': !experienciaSeguridad}">No</button>
          </div>
          <div v-if="experienciaSeguridad" class="form-group">
            <label>Cuantas veces</label>
            <input v-model="aniosExperiencia" type="number" min="0" class="input-field" />
          </div>
        </div>
        <div class="form-group">
          <label>Escriba sus principales necesidades a cubrir</label>
          <textarea v-model="experienciaPuesto" class="input-field textarea"></textarea>
        </div>
        <div class="form-group">
          <label>Ubicación</label>
          <input v-model="edad" type="number" min="0" class="input-field" />
        </div>
        <button @click="agregarTarea" class="submit-button" :disabled="loading">Agregar</button>
        <div v-if="showMessage" class="success-message">¡Su respuesta fue enviada correctamente!</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbarComponent from "../../../public/components/navbar/navbar.component.vue";

const URL = 'http://localhost:5126/api/Tareas/';

export default {
  name: 'OrderList',
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      experienciaSeguridad: false,
      aniosExperiencia: '',
      experienciaPuesto: '',
      edad: '',
      loading: false,
      showMessage: false,
    };
  },
  components: {
    navbarComponent,
  },
  methods: {
    agregarTarea() {
      if (this.loading) return;

      const tarea = {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        experienciaLaboral: this.experienciaSeguridad
            ? `${this.aniosExperiencia} años`
            : 'No',
        experienciaPuesto: this.experienciaPuesto,
        edad: this.edad,
        estado: false,
      };

      this.loading = true;
      this.showMessage = true;

      axios
          .post(URL, tarea)
          .then((response) => {
            console.log(response);
            this.loading = false;
            setTimeout(() => {
              this.showMessage = false;
            }, 3000);

            // Limpiar los campos del formulario
            this.nombre = '';
            this.apellido = '';
            this.correo = '';
            this.experienciaSeguridad = false;
            this.aniosExperiencia = '';
            this.experienciaPuesto = '';
            this.edad = '';
          })
          .catch((error) => {
            console.error(error);
            this.loading = false;
            this.showMessage = false;
          });
    },
    obtenerTareas() {
      this.loading = true;
      axios
          .get(URL)
          .then((response) => {
            console.log(response);
            this.loading = false;
          })
          .catch((error) => {
            console.error(error);
            this.loading = false;
          });
    },
  },
  created() {
    this.obtenerTareas();
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #333;
}

.form-container {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.textarea {
  height: 100px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.button-group button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.button-group button.active {
  background-color: #0056b3;
}

.button-group button:not(.active) {
  background-color: #6c757d;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #218838;
}

.submit-button:disabled {
  background-color: #c3e6cb;
  cursor: not-allowed;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
}
</style>
