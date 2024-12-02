<script setup>
import { ref, watch } from 'vue';
import { useDate } from 'vuetify'
// import { storeToRefs } from 'pinia'
import { useAppStore} from "@/stores/app.js";
import axios from 'axios';
import { useRouter } from 'vue-router';

const userStore = useAppStore();
const router = useRouter();

const appointmentData = ref({});
const isEditing = ref(false);

const date = new Date('2024-11-01')
const adapter = useDate()

const saveCustomer = () => {
  try {
    const data = { ...appointmentData.value };
    const index = userStore.customerDataIndex;
    if (index !== -1) {
      // Update existing data
      userStore.setCustomer(data);
    } else if (Object.keys(appointmentData.value).length > 0) {
      // Insert new data if form is not empty
      userStore.setCustomer(data);
      userStore.customerCompleted = true;
      userStore.setActiveCard('address');
    }
    isEditing.value = false;
  } catch (error) {
    console.error('Error saving customer data', error);
  }
};

const editCard = () => {
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
};

const allowedDates = () => {
  return adapter.parseISO('2024-11-01') % 2 === 0
}

watch(() => userStore.activeCard, (newVal) => {
  if (newVal === 'customer') {
    isEditing.value = true;
  }
});

</script>

<template>
  <v-responsive>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Appointment
            <v-btn icon @click="editCard" v-if="userStore.customerCompleted && !isEditing" class="ml-auto">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-date-picker
              v-model="date"
              :allowed-dates="allowedDates"
            ></v-date-picker>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="saveCustomer" v-if="isEditing || !userStore.customerCompleted">Guardar</v-btn>
            <v-btn @click="cancelEdit" v-if="isEditing">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<style scoped lang="sass">

</style>
