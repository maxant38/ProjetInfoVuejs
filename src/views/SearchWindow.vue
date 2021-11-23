<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />
  <div class="home">
    <input
      v-model="idWindow"
      type="number"
      placeholder="Enter the id of the window you are looking for"
    />
    <button v-on:click="search">Search</button>
  </div>
</template>

<style scoped>
</style>




<script>
// @ is an alias to /src
import axios from "axios";
import Swal from 'sweetalert2'



export default {

  name: "SearchWindow",
  components: {
  
  },

  data() {
    return {
      dataWindow: null,
      idWindow: null,
    };
  },

methods: {
  search() {

    axios
      .get("https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows/"+ idWindow )
      .then((response) => {
        (this.dataWindow = response.data), console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
        this.showAlert()
      })
      .finally(() => (this.loading = false));
  },

  showAlert(){
            // Use sweetalret2
           Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'There is no window with this id!',
  confirmButtonColor: 'black'
})
        }
}

}
</script>
