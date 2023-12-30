<template>
  <div class="container-fluid">
    <div class="row">
      <div class="navbarl col-md-2 text-bg-dark">
        <NavBarC />
      </div>
      <div class="NavTop col-md-10">
        <NavTop />
        <BrudCrump />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarC from "@/components/global/NavBarC.vue";
import NavTop from "@/components/global/NavTop.vue";
import BrudCrump from "@/components/global/BrudCrump.vue";

export default {
  name: "ProfileView",
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
</style>
