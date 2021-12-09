<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />

    
  <link
    type="text/css"
    rel="stylesheet"
    href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
  />

  <tbody class="align-middle">
    <tr v-on:click="Switch()">
      <td>{{ id }}</td>
      <td>{{ name }}</td>
      <td>{{ roomName }}</td>
      <td v-if="currentTemperature < targetTemperature" class="froid">{{ currentTemperature }} °C </td>
      <td v-else-if="currentTemperature === targetTemperature" class="ok">{{ currentTemperature }} °C </td>
      <td v-else class="chaud">{{ currentTemperature }} °C </td>
      <td>{{ targetTemperature }} °C</td>
      <td v-if= 'windowStatus ==="OPEN"' class="open" >{{ windowStatus }}</td>
      <td v-else class="close" >{{ windowStatus }}</td>
    </tr>
  </tbody>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {

  // inheritAttrs: false,
  name: "WindowsDeux",



  props: [
    "id",
    "name",
    "roomName",
    "currentTemperature",
    "targetTemperature",
    "windowStatus",
  ],
  methods: {

    showAlert() {
      // Use sweetalret2
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is a problem with windows loading !",
        confirmButtonColor: "green",
      });
    },

    forceRerender() {
      location.reload();
    },

      showAlertTwo() {
      // Use sweetalret2
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "The window statut is switched !",
        confirmButtonColor: "green",
      }).then(this.forceRerender);
    },

    Switch() {
      axios
        .put(
          "https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows/" +
            this.id +
            "/switch"
        )
        .then(() => {
          this.showAlertTwo();
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.showAlert();
        })
        .finally(() => (this.loading = false));
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.align-middle{
  font-size: 15px;
}

.open {
  color: green;
}
.close {
  color: red;
}

.ok{
  color:yellowgreen
}
.chaud{
  color:tomato
}
.froid{
  color:skyblue
}




</style>
