<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="trail in trails" :key="trail.id">
      <h2>Title: {{ trail.location }}</h2>
      <p>Location: {{ trail.distance }}</p>
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
