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
    <table class="table table-hover table-bordered  table-dark">
  <thead >
    <tr >
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Floor</th>
      <th scope="col">Current Room Temperature</th>
      <th scope="col">Target Room Temperature</th>
      <th scope="col">Building Id</th>
      
      
    </tr>
  </thead>
   

    <Rooms
      v-for="item in dataRooms"
      :id="item.id"
      :name="item.name"
      :floor="item.floor"
      :currentTemperature="item.currentTemperature"
      :targetTemperature="item.targetTemperature"
      :buildingId="item.buildingId"
      :key="item.id"
    ></Rooms>

</table>
  </div>

</template>

<style scoped>

table{
   table-layout: fixed;
   width:100%;

}
table.table-bordered{
    border:2px solid #00E541;

  }
table.table-bordered > thead > tr > th{
    border:2px solid #00E541;
}


.cont {
  margin: 0 5%;
  font-size: 15px;
}
</style>




<script>
// @ is an alias to /src
import Rooms from "@/components/Rooms.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "ListRooms",
  components: {
    Rooms,
  },

  data() {
    return {
      dataRooms: null,
    };
  },

  mounted() {
    axios
      .get(
        "https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/rooms"
      )
      .then((response) => {
        (this.dataRooms = response.data), console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    showAlert() {
      // Use sweetalret2
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There is a problem with rooms loading !",
        confirmButtonColor: "green",
      });
    },
  },
};
</script>
