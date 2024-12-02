<script setup>
import { ref, watch } from 'vue';
// import { storeToRefs } from 'pinia'
import { useAppStore} from "@/stores/app.js";
import axios from 'axios';
import { useRouter } from 'vue-router';

const userStore = useAppStore();
const router = useRouter();

const paymentData = ref({});
const isEditing = ref(true);

const saveCustomer = () => {


};

const editCard = () => {
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
};

watch(() => userStore.activeCard, (newVal) => {
  if (newVal === 'customer') {
    isEditing.value = true;
  }
});

</script>

<template>
  <v-card>
  <v-card-title>
    Metodo de Pago
  </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field v-model="paymentData.nameCard" label="Nombre tarjeta"/>
      <v-text-field v-model="paymentData.numberCard" label="Numero de tarjeta"/>
      <v-text-field v-model="paymentData.expirationDate" label="Fecha de expiración"/>
      <v-text-field v-model="paymentData.cvc" label="CVC" required name="Codigo de seguridad" />
    </v-form>
  </v-card-text>
</v-card>
</template>

<style scoped>

</style>
