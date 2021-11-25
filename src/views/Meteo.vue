<template>

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

<div v-if="Icon != null" id="styleMeteo">
<div><p>The current weather in Saint Etienne : {{ Weather }} </p></div>
<img v-bind:src="Icon">
     <p> {{ Humidity }} </p>
     <p> {{ Temperature}} </p>
     
</div>




</template>





<style scoped>

#styleMeteo{
  background-color: white;
  padding: 20px;
  margin: 0px 150px 0px 150px;
  border-radius: 8px 150px 10px 80px;
  margin-top:70px 
}

</style>



//
<script>

import axios from "axios";


export default {
  name: "Meteo",
  components: {},

  data() {
    return {
      Meteo:null,
      Humidity:null,
      Temperature:null,
      Icon:null,
      Weather:null,
    };
  },



  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Saint-Etienne,fr&APPID=d6e2c97f41145b13916ae1b9f06164c8"
      )
      .then((response) => {
        (this.Meteo = response.data), 
        console.log(response.data);
        this.Icon = ("https://openweathermap.org/img/w/"+ this.Meteo.weather[0].icon+".png").toString()
        this.Humidity = "Humidity :  " + this.Meteo.main.humidity + " %"
        this.Temperature = "Temperature :  "+ Math.round((this.Meteo.main.temp - 273.15)) + " °C"
        this.Weather = this.Meteo.weather[0].main
        console.log(this.Weather)

      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
