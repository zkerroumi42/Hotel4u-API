<template>
  <div>
    <h1>Hotel list</h1>
    <table border="1px">
      <tr>
        <td>Nom</td>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <input class="btncrud me-2 btn btn-primary" value="Read" />
          <input class="btncrud me-2 btn btn-warning" value="Update" />
          <input class="btncrud btn btn-danger" value="Delete" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const list = ref([]);

const getData = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/api/ville");
    console.warn(resp.data);
    list.value = resp.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getData();
});
</script>
