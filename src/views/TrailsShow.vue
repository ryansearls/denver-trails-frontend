<template>
  <div class="trails-show">
    <h2>{{ trail.name }}</h2>
    <img v-bind:src="trail.image" v-bind:alt="trail.name" />
    <p>Location: {{ trail.location }}</p>
    <p>Length: {{ trail.distance }}</p>
    <li v-if="$parent.getUserId() == trail.user_id">
      <router-link v-bind:to="`/trails/${trail.id}/edit`"><button>Edit trail</button></router-link>
    </li>
    <p><button v-on:click="destroyTrail(trail)">Delete Trail</button></p>
    <router-link to="/trails">Back to all trails</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      trail: {},
    };
  },
  created: function () {
    axios.get("/trails/" + this.$route.params.id).then((response) => {
      console.log("Show Trail", response);
      this.trail = response.data;
    });
  },
  methods: {
    destroyTrail: function (trail) {
      axios.delete("/trails/" + trail.id).then((response) => {
        console.log("Trail destroyed", response);
        this.$router.push("/trails");
      });
    },
  },
};
</script>
