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
            <button class="btn bg-success text-light" type="submit">
              Ajouter Client
            </button>
          </div>
          <div class="list_clients">
            <dataTable />
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
import dataTable from "@/components/dataTable.vue";

export default {
  name: "DashbordView",
  components: {
    NavBarC,
    NavTop,
    BrudCrump,
    dataTable,
  },
};
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
.list_clients {
  display: flex;
  margin-left: 20px;
}
</style>
