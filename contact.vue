<template>
  <toolbar/>
  <div class="container">
    <h1 class="title">Rellena el formulario</h1>

    <div class="form">
      <p class="name">Información Personal</p>

      <!-- Formulario -->
      <div class="form-group">
        <label for="age">Edad:</label>
        <input type="text" id="age" v-model="edad">
      </div>

      <div class="form-group">
        <label for="gender">Género:</label>
        <select id="gender" v-model="genero">
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div class="form-group">
        <label for="contract">Contrato:</label>
        <input type="radio" id="contractShort" value="corto plazo" v-model="contrato">
        <label for="contractShort">Corto Plazo</label>
        <input type="radio" id="contractLong" value="largo plazo" v-model="contrato">
        <label for="contractLong">Largo Plazo</label>
      </div>

      <div class="form-group">
        <label>Horarios:</label>
        <div>
          <label for="days">Días:</label>
          <input type="text" id="days" v-model="dias">
        </div>
        <div>
          <label for="shift">Turno:</label>
          <input type="text" id="shift" v-model="turno">
        </div>
        <div>
          <label for="hours">Horas:</label>
          <input type="text" id="hours" v-model="horas">
        </div>
      </div>

      <div class="form-group">
        <label for="extraHours">¿Disponible para horas extras?</label>
        <input type="radio" id="yes" value="si" v-model="horasExtras">
        <label for="yes">Sí</label>
        <input type="radio" id="no" value="no" v-model="horasExtras">
        <label for="no">No</label>
      </div>

      <div class="section-title">Experiencia Laboral</div>
      <div class="form-group">
        <label for="references">Referencias Laborales:</label>
        <input type="radio" id="referencesYes" value="si" v-model="referenciasLaborales">
        <label for="referencesYes">Sí</label>
        <input type="radio" id="referencesNo" value="no" v-model="referenciasLaborales">
        <label for="referencesNo">No</label>
      </div>

      <div class="form-group">
        <label for="securityExperience">Experiencia en vigilancia:</label>
        <input type="radio" id="securityYes" value="si" v-model="experienciaVigilancia">
        <label for="securityYes">Sí</label>
        <input type="radio" id="securityNo" value="no" v-model="experienciaVigilancia">
        <label for="securityNo">No</label>
      </div>

      <!-- Botón Enviar -->
      <button class="submit-button">Enviar</button>

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
  padding: 20px;
  background-color: #11315C;
}

.form {
  background-color: #f8f8f8;
  border-radius: 10px;
  width: 300px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: white;
  text-align: center;
  width: 100%;
  font-size: 55px;
  font-family: 'Poppins', sans-serif;
}

.submit-button {
  background-color: #F9A825;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0; /* Alinea el botón con el margen inferior */
  cursor: pointer;
  border-radius: 5px;
}

.name {
  margin-top: 10px;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  margin-left: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
}

input[type="text"], select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="radio"] {
  margin-right: 5px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>

<script >
import toolbar from "../components/Toolbar-component.vue";

export default {
  name: 'contact',
  components: {
    toolbar
  }
}
</script>

