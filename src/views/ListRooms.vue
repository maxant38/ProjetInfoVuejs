<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />
  <div class="home">
    <div class="row">
      <ul id="horizontal-list">
        <li class="two columns">Id</li>
        <li class="two columns">Name</li>
        <li class="two columns">Floor</li>
        <li class="two columns">Current Room Temperature</li>
        <li class="two columns">Target Room Temperature</li>
        <li class="two columns">Building Id</li>
      </ul>
    </div>

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
  </div>
</template>

<style scoped>
.table {
  display: table; /* Allow the centering to work */
  margin: 0 auto;
}

ul#horizontal-list {
  list-style: none;
  padding-top: 20px;
}
ul#horizontal-list li {
  background-color: pink;
  display: inline;
  margin: 20px;
}
</style>




<script>
// @ is an alias to /src
import Rooms from "@/components/Rooms.vue";
import axios from "axios";

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
};
</script>
