<!-- Component for displaying heaters -->
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

  <tbody class="align-middle ">
    <tr >
      <td >{{ id }}</td>
      <td>{{ name }}</td>
      <td>{{ floor }}</td>
      <!-- We change the color of the font depending of the temperature -->
     <td v-if="currentTemperature< targetTemperature " class="froid">{{ currentTemperature }} °C </td>
    <td v-else-if="targetTemperature  === currentTemperature" class="ok">{{currentTemperature  }} °C </td> 
    <td v-else class="chaud">{{ currentTemperature }} °C </td>
      <td>{{ targetTemperature }}°C</td>
      <td>{{ buildingId }}</td>


   


    </tr>
  </tbody>


</template>

<script>


export default {

  name: "Windows",
  props: [
    "id",
    "name",
    "floor",
    "currentTemperature",
    "targetTemperature",
    "buildingId",
  ],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.align-middle{
  font-size: 16px;
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
