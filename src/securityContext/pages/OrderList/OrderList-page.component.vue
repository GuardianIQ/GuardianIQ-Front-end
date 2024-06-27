<template>
  <div>
    <navbar-component></navbar-component>
    <div class="container">
      <h2>Solicitar Asesoría de Seguridad Local</h2>
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
          <label>¿Vive solo?</label>
          <div class="button-group">
            <button @click="consultlifecontext = false" :class="{'active': !consultlifecontext}">Sí</button>
            <button @click="consultlifecontext = true" :class="{'active': consultlifecontext}">No</button>
          </div>
          <div v-if="consultlifecontext" class="form-group">
            <label>Cantidad de integrantes en su hogar</label>
            <input v-model="cantidadPersonas" type="number" min="1" class="input-field" />
          </div>
        </div>
        <div class="form-group">
          <label>Escriba sus principales necesidades a cubrir</label>
          <textarea v-model="experienciaPuesto" class="input-field textarea"></textarea>
        </div>
        <div class="form-group">
          <label>Distrito</label>
          <select v-model="distrito" class="input-field">
            <option v-for="distrito in distritos" :key="distrito" :value="distrito">{{ distrito }}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Ubicación</label>
          <input v-model="ubicacion" class="input-field" />
        </div>
        <button @click="addResults" class="submit-button" :disabled="loading">Agregar</button>
        <div v-if="showMessage" class="success-message">¡Su respuesta fue enviada correctamente!</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbarComponent from "../../../public/components/navbar/navbar.component.vue";

export default {
  name: 'OrderList',
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      consultlifecontext: false,
      cantidadPersonas: '',
      experienciaPuesto: '',
      distrito: '',
      ubicacion: '',
      loading: false,
      showMessage: false,
      distritos: [
        "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo", "Chorrillos",
        "Cieneguilla", "Comas", "El Agustino", "Independencia", "Jesús María", "La Molina",
        "La Victoria", "Lima", "Lince", "Los Olivos", "Lurigancho", "Lurín", "Magdalena del Mar",
        "Miraflores", "Pachacamac", "Pucusana", "Pueblo Libre", "Puente Piedra", "Punta Hermosa",
        "Punta Negra", "Rímac", "San Bartolo", "San Borja", "San Isidro", "San Juan de Lurigancho",
        "San Juan de Miraflores", "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita",
        "Santa María del Mar", "Santa Rosa", "Santiago de Surco", "Surquillo", "Villa El Salvador",
        "Villa María del Triunfo"
      ],
    };
  },
  components: {
    navbarComponent,
  },
  methods: {
    async addResults() {
      this.loading = true;
      try {
        const formData = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.correo,
          consultlifecontext: this.consultlifecontext,
          cantidadPersonas: this.cantidadPersonas,
          experienciaPuesto: this.experienciaPuesto,
          distrito: this.distrito,
          ubicacion: this.ubicacion,
        };
        await axios.post('http://localhost:3000/inquiriesrequested', formData);
        this.showMessage = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
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
