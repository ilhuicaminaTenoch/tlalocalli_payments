<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar title="Tlalocalli payments"></v-app-bar>

      <v-main>
        <v-container class="bg-surface-variant">
          <Steppers/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  import Steppers from "@/components/steppers.vue";
</script>
