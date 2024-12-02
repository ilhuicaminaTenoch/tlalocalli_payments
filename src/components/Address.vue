<script setup>
import { ref, watch } from 'vue';
// import { storeToRefs } from 'pinia'
import { useAppStore} from "@/stores/app.js";
import axios from 'axios';

const form = ref(null);
const formData = ref({
  street: "",
  interiorNumber: "",
  exteriorNumber: "",
  zipcode: "",
  settlementSelected: "Selecciona",
  itemSettlement: ['Colonia 1', 'Colonia 2', 'Colonia 3'],
  municipality: "",
  state: ""
});

const rules = {
  required: (value) => !!value || "Este campo es obligatorio",
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
  <v-responsive>
    <v-card>
    <v-card-title>
      Dirección
    </v-card-title>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <v-text-field v-model="formData.street" label="Calle" :rules="[rules.required]" />
        <v-text-field v-model="formData.interiorNumber" label="Numero Interior"  :rules="[rules.required]" />
        <v-text-field v-model="formData.exteriorNumber" label="Numero Exterior" :rules="[rules.required]" />
        <v-text-field v-model="formData.zipcode" label="Código Postal" required :rules="[rules.required]" />
        <v-select
          v-model="formData.settlementSelected"
          :items="formData.itemSettlement"
          label="Colonia"
          :rules="[rules.required]"
        />
        <v-text-field v-model="formData.municipality" label="Municipio" :rules="[rules.required]" />
        <v-text-field v-model="formData.state" label="Estado" :rules="[rules.required]" />
      </v-form>
    </v-card-text>
  </v-card>
  </v-responsive>
</template>

<style scoped lang="sass">

</style>
