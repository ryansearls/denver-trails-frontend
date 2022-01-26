<template>
  <div class="trails-edit">
    <form v-on:submit.prevent="updateTrail(trail)">
      <h1>Edit Trail</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="currentTrailParams.name" />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" v-model="currentTrailParams.location" />
      </div>
      <div>
        <label>Distance:</label>
        <input type="text" v-model="currentTrailParams.distance" />
      </div>
      <input type="submit" value="Update" />
      <router-link to="/trails">Back to Trails</router-link>
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentTrailParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/trails/${this.$route.params.id}`).then((response) => {
      console.log("Trail Info:", response.data);
      this.currentTrailParams = response.data;
    });
  },
  methods: {
    updateTrail: function () {
      axios.patch(`/trails/${this.$route.params.id}`, this.currentTrailParams).then((response) => {
        console.log(response.data);
        this.$router.push("/trails");
      });
    },
  },
};
</script>
