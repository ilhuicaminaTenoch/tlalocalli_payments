<script setup>
import { ref } from 'vue';
import axios from 'axios';



const form = ref(null);
const formData = ref({
  name: "",
  lastName: "",
  email: "",
  movil: ""
});

const rules = {
  required: (value) => !!value || "Este campo es obligatorio",
  email: (value) => /.+@.+\..+/.test(value) || "Introduce un correo válido",
};

const submitForm = () => {
  const valid = form.value.validate();
  return { valid, data: formData.value };
};


defineExpose({
  submitForm,
});

</script>

<template>
  <v-card>
  <v-card-title>
    Cliente
  </v-card-title>
  <v-card-text>
    <v-form ref="form" lazy-validation>
      <v-text-field v-model="formData.name" label="Nombre" :rules="[rules.required]" />
      <v-text-field v-model="formData.lastName" label="Apellidos" :rules="[rules.required]" />
      <v-text-field v-model="formData.email" label="Correo Electrónico" :rules="[rules.required, rules.email]" />
      <v-text-field v-model="formData.movil" label="Móvil" :rules="[rules.required]"/>
    </v-form>
  </v-card-text>
</v-card>
</template>

<style scoped>

</style>
