<template>
  <html>
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


  <div id="nav" >
    <router-link to="/" class="three-columns">Search a Window</router-link>
    <router-link to="/windows" class="three columns">List Windows</router-link>
    <router-link to="/rooms" class="three columns">List Rooms</router-link>
    <router-link to="/meteo" class="three columns">Meteo Sainté</router-link>
  </div>
  <router-view />
  </html>
</template>

<style>

html{

  background-color: black;
}

#app {


  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-bottom:20px;
    background-color:#00E541;
  padding: 20px;

  font-weight: bold;
  font-size: 18px;
   border-radius: 0px 0px 50px 50px; 
  
}

#nav a {
  
  color: black;
}

#nav a.router-link-exact-active {
  color: #2f00ff;
}
</style>

<script> 
export default {

  

}
</script>