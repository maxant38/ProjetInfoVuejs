<template >
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

  <div class="home container">
    <div class="row">
    <div class="four columns">
       <input
      v-model="input"
      type="number"
      placeholder="Enter the id of the window you are looking for"/>

    
    
    <div class="eight columns">
    <button class="button-56" role="button" v-on:click="search">Search</button>
    </div>
    </div>
    </div>
    
  

    <div v-if="idWindow != null && idWindow != ''">
      <Window v-bind:idWindow="idWindow"> </Window>
    </div>
  </div>
</template>

<style scoped>
button{
   margin-top: 40px;
}
input{
  margin-top: 40px;

font-size: 17px;
};
      .home{
        background: #00abb7;
        height:100%
        


      }

.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-56:after {
  background-color: #00E541;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}

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

