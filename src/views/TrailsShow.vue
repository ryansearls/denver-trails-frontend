<template>
  <div class="trails-show">
    <h1>{{ message }}</h1>
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
