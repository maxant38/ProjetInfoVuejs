<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />
  <div class="home">
    <input
      v-model="input"
      type="number"
      placeholder="Enter the id of the window you are looking for"
    />
    <button v-on:click="search">Search</button>
    <div v-if="idWindow != null && idWindow != ''">
      <Window v-bind:idWindow="idWindow"> </Window>
    </div>
  </div>
</template>

<style scoped>
</style>




<script>
// @ is an alias to /src
import axios from "axios";
import Swal from "sweetalert2";
import Window from "../components/Window.vue";

export default {
  name: "SearchWindow",
  components: {
    Window,
  },

  data() {
    return {
      idWindow: null,
      input: null,
    };
  },

  methods: {
    search() {
      axios
        .get(
          "https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows/" +
            this.input
        )
        .then((response) => {
          (this.idWindow = response.data), console.log(this.idWindow);
          if (response.data == "") {
            this.showAlert();
          }
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.showAlert();
        })
        .finally(() => (this.loading = false));
    },

    showAlert() {
      // Use sweetalret2
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is no window with this id!",
        confirmButtonColor: "green",
      });
    },
  },
};
</script>
