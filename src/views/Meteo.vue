<template>


<div v-if="Icon != null">
<img v-bind:src="Icon">
     <p> {{ Humidity }} </p>
     <p> {{ Temperature}} </p>
     <p> {{ Weather }} </p>






</div>




</template>





<style scoped>
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
        this.Humidity = "Humidity:  " + this.Meteo.main.humidity.roundToInt().toString() + " %"
        this.Temperature = "Temperature:  "+ (this.Meteo.main.temp - 273.15).roundToInt().toString() + " °C"
        this.Weather = this.Meteo.weather[0].main

      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
