<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
     
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
            (click to swith the statut)
          </th>
        </tr>
      </thead>

   <tbody class="align-middle">
    <tr >
      <td>{{ idWindow.id }}</td>
      <td>{{  idWindow.name }}</td>
      <td>{{ idWindow.roomName }}</td>
      <td v-if="idWindow.roomCurrentTemperature< idWindow.roomTargetTemperature" class="froid">{{ idWindow.roomCurrentTemperature }} °C </td>
      <td v-else-if="idWindow.roomCurrentTemperature === roomTargetTemperature" class="ok">{{ idWindow.roomTargetTemperature }} °C </td>
      <td v-else class="chaud">{{ idWindow.roomCurrentTemperature}} °C </td>
      <td>{{ idWindow.roomTargetTemperature }} °C</td>
      <td v-if= 'windowStatus ==="OPEN"' class="open" >{{ idWindow.windowStatus }}</td>
      <td v-else class="close" >{{ idWindow.windowStatus }}</td>
    </tr>
  </tbody>
   </table>

</div>


</template>

<script>
export default {
 // inheritAttrs: false,
  name: 'Window',
  props: ["idWindow"]


}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.align-middle{
  font-size: 15px;
}

.open {
  color: green;
}
.close {
  color: red;
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

.row{
  font-size: 14px;
}

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

.cont {
  margin: 0 5%;
  font-size: 15px;
  margin-top:25px;
}


</style>
