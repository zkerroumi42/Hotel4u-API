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
          <div class="AjouterVilles">
            <a class="btn btn-success text-light" href="/Admin/villes/add"
              >Ajouter</a
            >
          </div>
          <div class="list_villes">
            <div class="container p-3 my-5 bg-light border border-primary">
              <input
                type="text"
                v-model="searchTerm"
                class="form-control mb-3"
                placeholder="Search..."
              />

              <table
                id="example"
                ref="dataTable"
                class="table table-striped nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in filteredList" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                      <a
                        class="btn btn-primary me-2 text-light"
                        href="/Admin/villes/read"
                        >read</a
                      >
                      <a
                        class="btn btn-warning me-2 text-light"
                        href="/Admin/villes/update"
                        >update</a
                      >
                      <a
                        class="btn btn-danger me-2 text-light"
                        href="/Admin/villes/delete"
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
  name: "VilleView",
  components: {
    NavBarC,
    NavTop,
    BrudCrump,
  },
  data() {
    return {
      dataTable: null,
    };
  },
  watch: {
    filteredList(newList) {
      if (this.dataTable) {
        this.dataTable.clear().rows.add(newList).draw();
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
import { ref, onMounted, watch } from "vue";
import axios from "axios";

const list = ref([]);
const searchTerm = ref("");

const getData = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/api/ville", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    list.value = resp.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getData();
});

const filteredList = ref([]);

watch(searchTerm, (newVal) => {
  if (!newVal) {
    filteredList.value = list.value;
  } else {
    filteredList.value = list.value.filter((item) => {
      return (
        item.id.toString().includes(newVal) ||
        item.name.toLowerCase().includes(newVal.toLowerCase())
      );
    });
  }
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
.AjouterVilles,
.list_villes {
  display: flex;
  margin-left: 20px;
}
.btncrud {
  width: 100px;
}
</style>
