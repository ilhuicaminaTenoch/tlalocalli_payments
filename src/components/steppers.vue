<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { useStepperStore } from "@/stores/stepper.js";
import { useAppStore} from "@/stores/app.js";


import TotalPayment from "@/components/TotalPayment.vue";

const isMobileScreen = ref(window.innerWidth <= 992);
const customerComponent = ref(null)
const addressComponent = ref(null)

const checkScreenSize = () => {
  isMobileScreen.value = window.innerWidth <= 992;
}

const stepperStore = useStepperStore();
const appStore = useAppStore();


onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const handleNext = async () => {
  let valid = false;
  let data = null;

  if (stepperStore.step === 1) {
    console.log("Guardar datos del cliente");
    ({ valid, data } = customerComponent.value.submitForm())
    if (valid) appStore.setCustomer(data)
  } else if (stepperStore.step === 2) {
    console.log("Guardar dirección");
    ({ valid, data } = addressComponent.value.submitForm())
    if (valid) appStore.setAddress(data)
  } else if (stepperStore.step === 3) {
    console.log("Guardar cita");
    // Acción específica del paso "Agenda"
  } else if (stepperStore.step === 4) {
    console.log("Procesar método de pago");
    // Acción específica del paso "Método De Pago"
  }

  // Avanza al siguiente paso
  if (stepperStore.step < stepperStore.items.length) {
    stepperStore.nextStep();
  }
};

const handlePrevious = () => {
  console.log(`Regresar desde el paso: ${stepperStore.items[stepperStore.step]}`);
  if (stepperStore.step > 0) {
    stepperStore.previousStep()
  }
};
</script>

<template>
  <TotalPayment/>
  <br>
  <v-stepper
    :mobile="isMobileScreen"
    v-model="stepperStore.step"
    :items="stepperStore.items"
    show-actions
  >
    <template v-slot:item.1>
      <Customer ref="customerComponent"/>
    </template>

    <template v-slot:item.2>
      <Address ref="addressComponent"/>
    </template>

    <template v-slot:item.3>
      <Appointment/>
    </template>

    <template v-slot:item.4>
      <PaymentMethod/>
    </template>

    <template #actions>
      <v-row justify="space-between" class="pa-3">
        <v-btn
          v-if="stepperStore.step > 1"
          color="secondary"
          @click="handlePrevious"
        >
          Anterior
        </v-btn>
        <v-btn
          color="primary"
          @click="handleNext"
        >
          {{ stepperStore.step === stepperStore.items.length  ? 'Pagar' : 'Siguiente' }}
        </v-btn>
      </v-row>
    </template>

  </v-stepper>
</template>

<style scoped lang="sass">

</style>
