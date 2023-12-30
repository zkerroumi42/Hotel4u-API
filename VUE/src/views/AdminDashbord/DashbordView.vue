<template>
  <div class="container-fluid">
    <div class="row">
      <div class="navbarl col-md-2 text-bg-dark">
        <NavBarC />
      </div>
      <div class="NavTop col-md-10">
        <NavTop />
        <BrudCrump />
        <div class="dbrud">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card bg-primary">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-secondary">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-success">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-warning">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-info">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-danger">
                  <div class="card-body">
                    <h4 class="card-title text-light">villes</h4>
                    <p class="card-text text-light">30</p>
                  </div>
                </div>
              </div>
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

export default {
  name: "DashbordView",
  components: {
    NavBarC,
    NavTop,
    BrudCrump,
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

.card {
  margin-left: 100px;
  margin-bottom: 100px;
  width: 250px;
  padding: 20px;
}
.dbrud {
  margin-top: 100px;
}
</style>
