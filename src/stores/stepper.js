// Utilities
import { defineStore } from 'pinia'

export const useStepperStore = defineStore('stepper', {
  state: () => ({
   items: [
     'Cliente',
     'Dirección',
     'Agenda',
     'Metodo De Pago'
   ],
    step: 1,
  }),
  actions: {
    nextStep() {
      this.step++;
    },
    previousStep() {
      this.step--;
    }

  },
  getters: {

  },
})
