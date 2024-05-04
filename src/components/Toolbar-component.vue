
<script>
export default {
  name: 'toolbar',
  data(){
    return {
      showMenu: false
    };

  },

  methods: {
    navigateTo(routePath) {
      this.$router.push(routePath);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <header class="toolbar">
    <div class="tituloybarra">
      <button @click="toggleMenu" class="menu-icon">
        <i class="fa fa-bars"></i>
      </button>
      <div v-if="showMenu" class="dropdown-menu">
        <a href="#">Opción 1</a>
        <a href="#">Opción 2</a>
        <a href="#">Opción 3</a>
      </div>

      <h1 class="toolbar-title">Guardian IQ</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar...">
        <button>
          <i class="fa fa-search"></i> <!-- Elimina el elemento <h3> -->
        </button>
      </div>
    </div>
  </header>

  <div class="toolbar2">
    <div class="button-container">
      <button @click="navigateTo('/')">Home</button>
      <button @click="navigateTo('/personalSafety')">Contratar personal</button>
      <button @click="navigateTo('/activeService')">Servicios activados</button>
      <button @click="navigateTo('/pageTeams')">Equipos</button>
      <button @click="navigateTo('/form')">Contacto</button>

    </div>
  </div>
</template>




<style scoped>
.toolbar {
  background: #11315C;
  padding: 0;
  height: 80px;
  font-family: 'Poppins', sans-serif;
}

.tituloybarra {
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: space-between; /* Añade espacio entre los elementos */
  padding: 0 20px;
}

.toolbar-title {
  text-align: left;
  margin-left: 60px;
  margin-top: 30px;
  color: white;
}

.toolbar2 {
  background: #8DA9C4;
  padding: 0.3%;
  font-family: 'Poppins', sans-serif;
}

.toolbar2 p {
  margin-left: 20%;
  color: white;
}

.button-container button{
  background: #8da9c4;
  color: #ffffff;
  margin: 20px;
  padding: 10px 20px 20px;
  transition: background 0.3s ease; /* Add transition for smooth color change */
  border-radius: 20px; /* Add rounded corners */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); /* Add shadow */
  font-family: 'Poppins', sans-serif;
}

.button-container button:hover {
  background: #F9A825;
}
.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 0 auto; /* Centra el elemento en su contenedor */
}

.search-bar input {
  border: none;
  flex-grow: 1;
}

.search-bar button {
  background: none;
  border: none;
}

.search-bar i {
  color: #11315C;
}

.menu-icon {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-menu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
}
</style>
