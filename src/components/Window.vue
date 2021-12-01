<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
      <div class="row">
          <li > {{ idWindow.id }}</li>
          <li > {{ idWindow.name }}</li>
      </div>



</template>

<script>
export default {
 // inheritAttrs: false,
  name: 'Window',
  props: ["idWindow"]
}

console.log("st")

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
</style>
