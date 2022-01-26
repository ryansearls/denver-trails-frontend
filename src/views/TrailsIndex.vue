<template>
  <div class="trails-index">
    <h1>{{ message }}</h1>
    <div v-for="trail in trails" :key="trail.id">
      <h2>Title: {{ trail.name }}</h2>
      <p>Location: {{ trail.location }}</p>
      <p>Distance: {{ trail.distance }}</p>
      <router-link v-bind:to="`/trails/${trail.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Explore Denver Trails",
      trails: [],
    };
  },

  created: function () {
    this.indexTrails();
  },

  methods: {
    indexTrails: function () {
      axios.get("/trails").then((response) => {
        this.trails = response.data;
        console.log("All Trails:", this.trails);
      });
    },
  },
};
</script>
