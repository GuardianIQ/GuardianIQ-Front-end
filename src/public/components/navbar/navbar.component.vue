<template>
  <div>
    <pv-toolbar class="toolbar">
      <template #start>
        <pv-button class="p-button-text text-white burger" icon="pi pi-bars" @click="toggleDrawer" />
        <div class="d-none d-md-flex align-items-center">
          <router-link to="/home">
            <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo" />
          </router-link>
          <h2 class="titulo">GuardianIQ</h2>
          <div class="flex ml-4">
            <router-link v-for="item in items" :key="item.label" :to="item.to">
              <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </div>
      </template>
      <template #end>
        <div class="auth-buttons" style="position: relative;">
          <h2 @click="toggleDropdown" class="profile-link">Ver perfil</h2>
          <div v-if="showDropdown" class="dropdown-menu">
            <pv-button class="dropdown-item" label="Carrito de compras " @click="cart" />
            <pv-button class="dropdown-item" label="Servicios activos" @click="activeservices"/>
            <pv-button class="dropdown-item" label="Editar mis datos" @click="edit" />
          </div>
        </div>
      </template>
    </pv-toolbar>
    <pv-sidebar v-model:visible="drawer" header="        " position="left" class="top-sidebar bg-white p-4">
      <div class="sidebar-content">
        <router-link v-for="item in items" :key="item.label" :to="item.to" class="sidebar-link">
          <pv-button class="p-button-text text-dark">{{ item.label }}</pv-button>
        </router-link>
        <button @click="logout" class="logout-button">Log Out</button>
      </div>
    </pv-sidebar>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>

import { useRouter } from 'vue-router';

export default {
  name: "toolbar-admin",
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Inicio', to: '/home' },
        { label: 'Personal de seguridad', to: '/PersonalCardPage' },
        { label: 'Artefactos de seguridad', to: '/SafetyDevicePage' },
        { label: 'Reserva de consultorias', to: '/orderList' },
        { label: 'Soporte Tecnico', to: '/formSupport' }
      ],
      showDropdown: false
    };
  },
  setup() {
    const router = useRouter();

    const edit = () => {
      router.push('/UserProfile');
    };

    const activeservices = () => {
      router.push('/activeservices');
    };
    const logout = () => {
      router.push('/login');
    };
    const cart = () => {
      router.push('/cart');
    };
    return {
      edit,
      logout,
      activeservices,
      cart,
    };
  },
  methods: {

    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
};
</script>

<style scoped>
.toolbar {
  background-color: #11315C;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 0px 50px 0px #707070;
}

.titulo {
  color: white;
  margin-left: 10px;
}

.text-white {
  color: white;
}

.text-dark {
  color: #343a40;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-4 {
  margin-left: 1rem;
}
.main-content {
  margin-top: 70px;
  padding: 20px;
}
.flex {
  display: flex;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.mt-4 {
  margin-top: 1.5rem;
}

.options {
  margin-top: 10px;
}

.option {
  display: block;
  margin: 5px 0;
}

.d-none {
  display: none !important;
}

.d-md-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center;
}

.main-content {
  margin-top: 70px; /* Adjust this value based on the height of your toolbar */
  padding: 20px;
}

.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.logout-button:hover {
  background-color: #d32f2f;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.auth-buttons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.dropdown-menu {
  position: relative;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
  margin-top: 300px;
}

.dropdown-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
.top-sidebar .sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar-link {
  margin-bottom: 1rem;
}
.auth-buttons .profile-link {
  cursor: pointer;
  color: white;
  margin-right: 10px;
}
.auth-buttons {
  display: flex;
  align-items: center;
}
.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown-item {
  width: 100%;
}

@media screen and (max-width: 980px) {
  .flex.ml-4,
  .auth-buttons h2 {
    display: none;
  }

  .burger {
    display: block;
  }
}
</style>
