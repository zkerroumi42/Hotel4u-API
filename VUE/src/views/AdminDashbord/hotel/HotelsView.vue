<template>
  <div class="container-fluid">
    <div class="row">
      <div class="navbarl col-md-2 text-bg-dark">
        <NavBarC />
      </div>
      <div class="NavTop col-md-10">
        <NavTop />
        <BrudCrump />
        <div class="container">
          <div class="AjouterClient">
            <a class="btn btn-success text-light" href="/Admin/hotels/add"
              >Ajouter</a
            >
          </div>
          <div class="list_clients">
            <div class="container p-3 my-5 bg-light border border-primary">
              <table
                id="example"
                ref="dataTable"
                class="table table-striped nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Logo</th>
                    <th>Facebook</th>
                    <th>Instagrame</th>
                    <th>Youtube</th>
                    <th>Longitude</th>
                    <th>Latitude</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.telephone }}</td>
                    <td>{{ item.logo }}</td>
                    <td>{{ item.facebook }}</td>
                    <td>{{ item.instagrame }}</td>
                    <td>{{ item.youtube }}</td>
                    <td>{{ item.longiude }}</td>
                    <td>{{ item.latitude }}</td>
                    <td>
                      <a
                        class="btn btn-primary me-2 text-light"
                        href="/Admin/hotels/read"
                        >read</a
                      >
                      <a
                        class="btn btn-warning me-2 text-light"
                        href="/Admin/hotels/update"
                        >update</a
                      >
                      <a
                        class="btn btn-danger me-2 text-light"
                        href="/Admin/hotels/delete"
                        >delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarC from "@/components/global/NavBarC.vue";
import NavTop from "@/components/global/NavTop.vue";
import BrudCrump from "@/components/global/BrudCrump.vue";

import "datatables.net";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";
export default {
  name: "HotelView",
  components: {
    NavBarC,
    NavTop,
    BrudCrump,
  },
  data() {
    return {
      dataTable: null,
      searchTerm: "",
    };
  },
  watch: {
    searchTerm(newVal) {
      if (this.dataTable) {
        this.dataTable.search(newVal).draw();
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.dataTable = $(this.$refs.dataTable).DataTable({
        responsive: true,
        paging: true,
        pageLength: 10,
      });
    });
  },
  beforeUnmount() {
    if (this.dataTable) {
      this.dataTable.destroy(true);
    }
  },
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const list = ref([]);

const getData = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/api/hotel");
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
<style>
.navbarl {
  height: 1000px;
  background: #33393f;
}
.NavTop {
  padding: 0 !important;
}
.AjouterClient,
.list_villes {
  display: flex;
  margin-left: 20px;
}
.btncrud {
  width: 25%;
}
</style>
