<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
      <div class="row">
          <li class="two columns"> {{ id }}</li>
          <li class="two columns">{{ name }} </li>
          <li class="two columns">{{ roomName}} </li>
          <li class="two columns"> {{ currentTemperature }} </li>
          <li class="two columns">{{ targetTemperature }} </li>
          <li class="two columns">{{ windowStatus }} </li>
      </div>



</template>

<script>
export default {
 // inheritAttrs: false,
  name: 'Window',
  props:["id","name","roomName","currentTemperature","targetTemperature","windowStatus"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#titre-colonne {
  height: 84px;
}

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
