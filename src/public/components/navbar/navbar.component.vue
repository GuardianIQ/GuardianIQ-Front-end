<template>
  <header>
    <pv-toolbar class="tooolbarrrr">
      <template #start>
        <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer" />
        <div class="d-none d-md-flex align-items-center">
          <img src="https://pageguardianiq.vercel.app/img/Glogo.png" width="100" alt="Toolbar image" aria-label="Branding logo" />
          <h2 class="titulo">GuardianIQ</h2>
          <div class="flex ml-4">
            <router-link v-for="item in items" :key="item.label" :to="item.to">
              <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
            </router-link>
          </div>
        </div>
      </template>
      <template #end>
        <div class="auth-buttons">
          <router-link to="/login">
            <pv-button class="p-button-text text-white">Login</pv-button>
          </router-link>
          <router-link to="/signup">
            <pv-button class="p-button-text text-white ml-2">Sign Up</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>

  <pv-sidebar v-model:visible="drawer" class="sidebar">
    <div class="flex-column">
      <router-link v-for="item in items" :key="item.label" :to="item.to" class="sidebar-link">
        <pv-button class="p-button-text text-dark">{{ item.label }}</pv-button>
      </router-link>
      <button @click="logout" class="logout-button">Log Out</button>
    </div>
  </pv-sidebar>

  <main class="main-content">
    <router-view />
  </main>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home' },
        { label: 'PersonalCardPage', to: '/PersonalCardPage' },
        { label: 'SafetyDevicePage', to: '/SafetyDevicePage' },
        { label: 'Security Consulting', to: '/orderList' },
        { label: 'Form Support', to: '/formSupport' }
      ]
    };
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      router.push('/login');
    };

    return {
      logout
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style scoped>
.tooolbarrrr {
  background-color: #11315C;
}
.titulo {
  color: white;
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
.flex {
  display: flex;
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
.toolbar {
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
}
.main-content {
  margin-top: 60px;
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
@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
}
</style>
