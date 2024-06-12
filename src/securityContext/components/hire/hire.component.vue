<template>
  <div class="guard-detail">
    <h2>Detalle del Guardia: {{ personal.nombre }}</h2>
    <p>Distrito: {{ personal.distrito }}</p>
    <p>Edad: {{ personal.edad }} años</p>
    <p>Sexo: {{ personal.sexo }}</p>
    <p>Experiencia: {{ personal.experiencia }} años</p>
    <p>Disponibilidad: {{ personal.disponibilidad }}</p>
    <button @click="$emit('close')">Cerrar</button>
  </div>
</template>

<script>
export default {
  name: 'GuardDetail',
  props: {
    personal: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.guard-detail {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  margin: 16px auto;
  background-color: #f9f9f9;
}
</style>
