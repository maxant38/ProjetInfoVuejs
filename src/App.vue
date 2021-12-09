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


<nav class="navbar navbar-expand-lg navbar-light bg-light">

     <img src="http://aelpi.univ-lyon1.fr/files/2019/10/mines_saint-etienne-300x225.png" alt="" width="30" height="24">
      <div class="navbar-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">| Search Window |</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/windows">| List Windows |</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rooms">| List Rooms |</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/heaters">| List Heaters |</router-link>
          </li>
          <li class="nav-item" >
            <router-link class="nav-link" to="/meteo">| Meteo Sainté |</router-link>
          </li>
        </ul>
      </div>

</nav>

<!-- 
<div id="nav" >
    <router-link to="/" class="three-columns">Search a Window</router-link>
    <router-link to="/windows" class="three columns">List Windows</router-link>
    <router-link to="/rooms" class="three columns">List Rooms</router-link>
    <router-link to="/meteo" class="three columns">Meteo Sainté</router-link>
  </div>  -->

  <router-view />
  </html>
</template>

<style>

#titre {
  font-size: 25px;
}

.navbar{
  font-size: 20px;

}

html{

  background-color: black;
}

#app {


  text-align: center;
  color: #2c3e50;
}


</style>

<script> 




export default {
  
  


}
</script> 