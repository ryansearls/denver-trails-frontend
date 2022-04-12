<template>
  <div class="trails-index">
    <h1>{{ message }}</h1>
    Search by title:
    <input v-model="titleFilter" />
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="trail in filterBy(trails, titleFilter, 'name')" :key="trail.id">
        <div class="card h-100">
          <img :src="trail.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ trail.name }}</h5>
            <p class="card-text">
              {{ trail.location }}
            </p>
            <router-link v-bind:to="`/trails/${trail.id}`">More details</router-link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-for="trail in trails" :key="trail.id">
      <h2>Title: {{ trail.name }}</h2>
      <span class="image main"><img :src="trail.image" alt="" /></span>
      <p>Location: {{ trail.location }}</p>
      <p>Distance: {{ trail.distance }}</p>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "Explore Denver Trails",
      trails: [],
      titleFilter: "",
    };
  },
  mixins: [Vue2Filters.mixin],
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
