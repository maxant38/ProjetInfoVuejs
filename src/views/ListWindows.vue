<template>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  <div class="home">
      <div class="row">
        <ul id="horizontal-list">
          <li class="two columns">Id</li>
          <li class="two columns">Name</li>
          <li class="two columns">Room Name</li>
          <li class="two columns">Current Room Temperature</li>
          <li class="two columns">Target Room Temperature</li>
          <li class="two columns">Windows Statut</li>
    
          
        </ul>
      </div>

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
  background-color: pink ;
  display: inline;
  margin: 20px;
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
        this.showAlert()
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
    
    
    }
  
};
</script>
