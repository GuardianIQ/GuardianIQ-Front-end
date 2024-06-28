<template>
  <navbar-component></navbar-component>
  <div class="container">
    <h1 class="title">Servicios Activos</h1>
    <div class="card-container">
      <div v-for="service in activeServices" :key="service.id" class="card">
        <div class="card-image-container">
          <img :src="getSecurityTeam(service.idsecurityteam).foto" alt="Foto del equipo de seguridad" class="card-image">
        </div>
        <h2 class="card-title">{{ getSecurityTeam(service.idsecurityteam).nombre }}</h2>
        <p class="card-date">Fecha de inicio: {{ service.startdate }}</p>
        <p class="card-date">Fecha de fin: {{ service.enddate }}</p>
        <button @click="deleteActiveService(service.id)">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import navbarComponent from "../../../public/components/navbar/navbar.component.vue";

export default {
  data() {
    return {
      activeServices: [],
      securityTeams: []
    }
  },
  components: {
    navbarComponent,
  },
  methods: {
    getSecurityTeam(id) {
      return this.securityTeams.find(team => team.id === id);
    },
    async deleteActiveService(id) {
      try {
        await axios.delete(`http://localhost:3000/activeServices/${id}`);
        this.activeServices = this.activeServices.filter(service => service.id !== id);
      } catch (error) {
        console.error('Error deleting active service:', error);
      }
    }
  },
  async created() {
    try {
      const activeServicesResponse = await axios.get('http://localhost:3000/activeServices');
      this.activeServices = activeServicesResponse.data;

      const securityTeamsResponse = await axios.get('http://localhost:3000/SegurityTeams');
      this.securityTeams = securityTeamsResponse.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  width: calc(33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.card-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  font-size: 1.2em;
  margin: 10px;
}

.card-date {
  margin: 10px;
  color: #666;
}
</style>