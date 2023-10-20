<template>
    <div class="registration-container">
      <h1>Registro de Usuario</h1>
      <form @submit.prevent="submitForm" class="registration-form">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="user.name" required>
        </div>
        <div class="form-group">
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="user.username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit" class="submit-button">Enviar</button>
      </form>
  
      <div v-if="submitted" class="success-message">
        <h2>Usuario creado:</h2>
        <pre>{{ createdUser }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          username: '',
          password: ''
        },
        createdUser: null,
        submitted: false
      };
    },
    methods: {
      async submitForm() {
        // Simulación de la petición POST a la URL
        const response = await fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.user)
        });
  
        if (response.ok) {
          this.createdUser = this.user;
          this.submitted = true;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .registration-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  .registration-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
  
  .submit-button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    margin-top: 20px;
    border: 1px solid #2ecc71;
    background-color: #d4edda;
    padding: 10px;
    border-radius: 5px;
  }
  
  pre {
    white-space: pre-wrap;
  }
  </style>
  