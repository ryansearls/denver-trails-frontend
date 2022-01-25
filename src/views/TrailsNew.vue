<template>
  <div class="trails-new">
    <h1>Add a trail</h1>
    <form class="flex-down" v-on:submit.prevent="createTrail()">
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
