<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"
  />

  <div class="cont align-middle">
    <table class="table table-hover table-bordered table-dark align-middle">
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

      <tbody>
        <tr v-on:click="Switch()">
          <td>{{ idWindow.id }}</td>
          <td>{{ idWindow.name }}</td>
          <td>{{ idWindow.roomName }}</td>
          <td
            v-if="
              idWindow.roomCurrentTemperature < idWindow.roomTargetTemperature
            "
            class="froid"
          >
            {{ idWindow.roomCurrentTemperature }} °C
          </td>
          <td
            v-else-if="
              idWindow.roomCurrentTemperature === roomTargetTemperature
            "
            class="ok"
          >
            {{ idWindow.roomTargetTemperature }} °C
          </td>
          <td v-else class="chaud">{{ idWindow.roomCurrentTemperature }} °C</td>
          <td>{{ idWindow.roomTargetTemperature }} °C</td>
          <td v-if="windowStatus === 'OPEN'" class="open">
            {{ idWindow.windowStatus }}
          </td>
          <td v-else class="close">{{ idWindow.windowStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  // inheritAttrs: false,
  name: "Window",
  props: ["idWindow"],

  methods: {
    forceRerender() {
      location.reload();
    },

    showAlertTwo() {
      // Use sweetalret2
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "The window statut is switched ! The search window webpage will reload !",
        confirmButtonColor: "green",
      }).then(this.forceRerender);
    },

    Switch() {
      axios
        .put(
          "https://app-d45f58a2-9018-4709-947d-995f929abb3f.cleverapps.io/api/windows/" +
            this.idWindow.id +
            "/switch"
        )
        .then(() => {
          this.showAlertTwo();
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          this.showAlert();
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont {
  margin: 0 5%;
  font-size: 15px;
  margin-top: 25px;
}

.table {
  table-layout: fixed;
  width: 100%;
  text-align: center;
  align-content: center;
}

table.table-bordered {
  border: 2px solid;
}
table.table-bordered > thead > tr > th {
  border: 2px solid #00e541;
}

.align-middle {
  font-size: 15px;
  text-align: center;
}

.open {
  color: green;
}
.close {
  color: red;
}

.ok {
  color: yellowgreen;
}
.chaud {
  color: tomato;
}
.froid {
  color: skyblue;
}

.row {
  font-size: 16px;
}

#titre-colonne {
  height: 74px;
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
  background-color: pink;
  display: inline;
  margin: 20px;
}

.cont {
  margin: 0 5%;
  font-size: 15px;
  margin-top: 25px;
}
</style>
