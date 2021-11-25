<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />

  <!-- Load required Bootstrap and BootstrapVue CSS -->
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

  <div class="cont">
    <table class="table table-hover table-bordered table-dark">
      <thead>
        <tr class="align-middle">
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Room Name</th>
          <th scope="col">Current Room Temperature</th>
          <th scope="col">Target Room Temperature</th>
          <th scope="col">
            Windows Statut<br />
            (click on statut to switch)
          </th>
        </tr>
      </thead>

      <Windows
        v-for="item in dataWindows"
        :id="item.id"
        :name="item.name"
        :roomName="item.roomName"
        :currentTemperature="item.roomCurrentTemperature"
        :targetTemperature="item.roomTargetTemperature"
        :windowStatus="item.windowStatus"
        :key="item.id"
      ></Windows>
    </table>
  </div>
</template>

<style scoped>
.cont {
  margin: 0 5%;
}

.table {
  table-layout: fixed;
  width: 100%;
}

table.table-bordered{
    border:2px solid #00E541;

  }
table.table-bordered > thead > tr > th{
    border:2px solid #00E541;
}


</style>




<script>
// @ is an alias to /src
import Windows from "@/components/Windows.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "ListRooms",
  components: {
    Windows,
  },

  data() {
    return {
      dataWindows: null,
    };
  },

  mounted() {
    axios
      .get(
        "https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows"
      )
      .then((response) => {
        (this.dataWindows = response.data), console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
        this.showAlert();
      })
      .finally(() => (this.loading = false));
  },

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
  },
};
</script>
