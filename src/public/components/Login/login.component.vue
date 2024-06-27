<template>
  <div class="home">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <h1>LogIn</h1>
          <img src="../../../assets/images/logito.png" id="icon" alt="User Icon" />
        </div>
        <form v-on:submit.prevent="login">
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="usuario" />
          <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password" v-model="password" />
          <input type="submit" class="fadeIn fourth" value="Login" />
          <button class="gotoRegister" @click="goToRegister">Register</button>
        </form>
        <div class="alert alert-danger" role="alert" v-if="error">
          {{ error_msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      usuario: '',
      password: '',
      error: false,
      error_msg: '',
    };
  },
  methods: {
    async login() {
      if (!this.usuario || !this.password) {
        this.error = true;
        this.error_msg = 'Both fields are required';
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/usuarios', {
          usuario: this.usuario,
          password: this.password,
        });

        if (response.data.status === 'ok') {
          localStorage.setItem('token', response.data.result.token);
          this.$router.push('/home');
        } else {
          this.error = true;
          this.error_msg = response.data.message || 'Invalid credentials';
        }
      } catch (error) {
        this.error = true;
        this.error_msg = 'An error occurred. Please try again later.';
        console.error('Error during login:', error);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
html {
  background-color: #11315c;
}

body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

.gotologin {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: #069;
  text-decoration: underline;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
}

#formContent {
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
.gotoRegister {
  background-color: #1a2fae;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.gotoRegister:hover {
  background-color: #53b6d5;
}
input[type='button'],
input[type='submit'],
input[type='reset'] {
  background-color: #f9a825;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  border-radius: 5px;
  margin: 5px 20px 40px 20px;
  transition: all 0.3s ease-in-out;
}

input[type='button']:hover,
input[type='submit']:hover,
input[type='reset']:hover {
  background-color: #fbc02d;
}

input[type='button']:active,
input[type='submit']:active,
input[type='reset']:active {
  transform: scale(0.95);
}

input[type='text'],
input[type='password'] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
}

input[type='text']:focus,
input[type='password']:focus {
  background-color: #fff;
  border-bottom: 2px solid #f9a825;
}

input[type='text']::placeholder,
input[type='password']::placeholder {
  color: #cccccc;
}

.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
}

#icon {
  width: 60%;
  margin-bottom: 20px;
}
</style>
