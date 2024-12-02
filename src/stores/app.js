// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    customerCompleted: false,
    customerData: {},
    addressCompleted: false,
    addressData: {},
    appointmentCompleted: false,
    appointmentData: {},
    paymentCompleted: false,
    paymentData: {},
  }),
  actions: {
    setCustomer(data) {
      this.customerData = data;
      this.customerCompleted = true;
    },
    setAddress(data) {
      this.addressData = data;
      this.addressCompleted = true;
    },
    setAppointment(data) {
      this.appointmentData = data;
      this.appointmentCompleted = true;
    },
    setPayment(data) {
      this.paymentData = data;
      this.paymentCompleted = true;
    },
    setActiveCard(card) {
      console.info('card ', card)
      this.activeCard = card;
    },



  },
  getters: {
    customerDataIndex: (state) => {
      return Object.keys(state.customerData).length ? 0 : -1;
    },
    addressDataIndex: (state) => {
      return Object.keys(state.addressData).length ? 0 : -1;
    },
  },
})
