<template>
  <div class="profile-container">
    <navbar-component></navbar-component>
    <div class="profile-edit">
      <h2>Edit Profile</h2>
      <form @submit.prevent="saveChanges" class="profile-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input type="text" id="lastname" v-model="formData.lastname" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="Numero">Phone Number</label>
          <input type="text" id="Numero" v-model="formData.numero" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="formData.password" required />
        </div>
        <button type="submit" class="submit-button">Save Changes</button>
      </form>
      <div v-if="saved" class="message success">
        <p>Ccambios realizados exitosamente!!</p>
      </div>
      <div v-if="error" class="message error">
        <p>Error al intentar guardar los datos</p>
      </div>
    </div>
  </div>
</template>

<script>

import navbarComponent from '@/public/components/navbar/navbar.component.vue';

export default {
  name: 'ProfileEdit',

  components: {
    navbarComponent
  },
  data() {
    return {
      formData: {
        name: '',
        lastname: '',
        email: '',
        numero: '',
        password: ''
      },
      saved: false,
      error: false
    };
  },
  methods: {
    async saveChanges() {
      try {

        const response = await fetch('http://localhost:3000/Users/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          this.saved = true;
          this.error = false;
        } else {
          this.saved = false;
          this.error = true;
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        this.saved = false;
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.profile-edit {
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.profile-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.submit-button {
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.message {
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
}
</style>
