<template>
  <div class="container p-3 my-5 bg-light border border-primary">
    <table
      id="example"
      ref="dataTable"
      class="table table-striped nowrap"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Num_Telephone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oussama</td>
          <td>Bouchama</td>
          <td>B-Oussama@gmail.com</td>
          <td>Errachidia</td>
          <td>0606060606</td>
          <td>
            <input class="btncrud me-2 btn btn-primary" value="Read" />
            <input class="btncrud me-2 btn btn-warning" value="Update" />
            <input class="btncrud btn btn-danger" value="Delete" />
          </td>
        </tr>
        <tr>
          <td>Oussama</td>
          <td>Bouchama</td>
          <td>B-Oussama@gmail.com</td>
          <td>Errachidia</td>
          <td>0606060606</td>
          <td>
            <input class="btncrud me-2 btn btn-primary" value="Read" />
            <input class="btncrud me-2 btn btn-warning" value="Update" />
            <input class="btncrud btn btn-danger" value="Delete" />
          </td>
        </tr>
        <tr>
          <td>Oussama</td>
          <td>Bouchama</td>
          <td>B-Oussama@gmail.com</td>
          <td>Errachidia</td>
          <td>0606060606</td>
          <td>
            <input class="btncrud me-2 btn btn-primary" value="Read" />
            <input class="btncrud me-2 btn btn-warning" value="Update" />
            <input class="btncrud btn btn-danger" value="Delete" />
          </td>
        </tr>
        <tr>
          <td>Oussama</td>
          <td>Bouchama</td>
          <td>B-Oussama@gmail.com</td>
          <td>Errachidia</td>
          <td>0606060606</td>
          <td>
            <input class="btncrud me-2 btn btn-primary" value="Read" />
            <input class="btncrud me-2 btn btn-warning" value="Update" />
            <input class="btncrud btn btn-danger" value="Delete" />
          </td>
        </tr>
        <tr>
          <td>Oussama</td>
          <td>Bouchama</td>
          <td>B-Oussama@gmail.com</td>
          <td>Errachidia</td>
          <td>0606060606</td>
          <td>
            <input class="btncrud me-2 btn btn-primary" value="Read" />
            <input class="btncrud me-2 btn btn-warning" value="Update" />
            <input class="btncrud btn btn-danger" value="Delete" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "datatables.net";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import $ from "jquery";

export default {
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

<style scoped>
.btncrud {
  width: 100px;
}
</style>
