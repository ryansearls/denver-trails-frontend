<template>
  <div class="trails-new">
    <h1>Add a trail</h1>
    <form v-on:submit.prevent="createTrail()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <li>
        Name:
        <input type="text" v-model="newTrailParams.name" />
      </li>
      <li>
        Location:
        <input type="text" v-model="newTrailParams.location" />
      </li>
      <li>
        Distance:
        <input type="text" v-model="newTrailParams.distance" />
      </li>
      <li>
        Image:
        <input type="text" v-model="newTrailParams.image" />
      </li>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newTrailParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createTrail: function () {
      axios
        .post("/trails", this.newTrailParams)
        .then((response) => {
          console.log("Trail Created", response);
          this.$router.push("/trails");
        })
        .catch((error) => {
          console.log("trail create errors", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
