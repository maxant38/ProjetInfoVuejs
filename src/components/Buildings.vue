<!-- Component for displaying buildings -->

<template> 
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />

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

  <tbody class="align-middle">
    <tr >
      <td>{{ id }}</td>
      <td>{{ name }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  // inheritAttrs: false,
  name: "Buildings",

  props: ["id", "name"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.align-middle {
  font-size: 15px;
}

.on {
  color: green;
}
.off {
  color: red;
}
</style>
  